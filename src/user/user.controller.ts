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
    Headers,
    UploadedFile,
} from '@nestjs/common';
import { HttpHelper } from '../helpers/http-helper';
import { JwtGuard, RoleGuard } from '../auth/guard';
import { TypeRoleUser } from '@prisma/client';
import { FileInterceptor } from '@nestjs/platform-express';
import { Roles } from '../auth/decorator';
import UpdateProfileDto from './dto/update-user.dto';
import { UserService } from './user.service';


@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly httpHelper: HttpHelper,
    ) { }

    @Put("profile")
    @UseGuards(JwtGuard, RoleGuard)
    @Roles(TypeRoleUser.USER)
    @UseInterceptors(FileInterceptor('profilePic'))
    async updateProfile(
        @Headers("authorization") authorization: string,
        @Body() dto: UpdateProfileDto,
        @Res() res,
        @UploadedFile() profilePic?: Express.Multer.File) {
        await this.userService.updateProfile(authorization, dto, profilePic);
        return this.httpHelper.formatResponse(res, HttpStatus.OK, {});
    }
}