import {
    Body,
    Controller,
    Get,
    Put,
    HttpStatus,
    Param,
    Post,
    Res,
    Delete,
    Query,
    UseGuards,
    UseInterceptors,
    UploadedFile,
    Headers,
} from '@nestjs/common';
import { FishService } from './fish.service';
import { HttpHelper } from '../helpers/http-helper';
import { JwtGuard, RoleGuard } from '../auth/guard';
import { Roles } from '../auth/decorator';
import { TypeRoleUser } from '@prisma/client';
import { FileInterceptor } from '@nestjs/platform-express';


@Controller('fish')
export class FishController {
    constructor(
        private readonly fishService: FishService,
        private readonly httpHelper: HttpHelper,
    ) { }

    @Post("scan")
    @UseGuards(JwtGuard, RoleGuard)
    @Roles(TypeRoleUser.USER)
    @UseInterceptors(FileInterceptor('file'))
    async createFishScanHistory(
        @Headers("authorization") authorization: string,
        @Res() res,
        @UploadedFile() file: Express.Multer.File) {
        const result = await this.fishService.createFishHistory(authorization, file);
        return this.httpHelper.formatResponse(res, HttpStatus.OK, result);
    }

    @Get("history")
    @UseGuards(JwtGuard, RoleGuard)
    @Roles(TypeRoleUser.USER)
    async getNewsCurrentDay(
        @Headers("authorization") authorization: string,
        @Res() res
    ) {
        const result = await this.fishService.findManyFishHistoryByIdUser(authorization)
        return this.httpHelper.formatResponse(res, HttpStatus.OK, result)
    }
}