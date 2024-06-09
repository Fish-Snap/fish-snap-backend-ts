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
} from '@nestjs/common';
import { HttpHelper } from '../helpers/http-helper';
import { NewsService } from './news.service';
import { CreateNewsDto, UpdateNewsDto } from './dto/create-news.dto';
import { Roles } from '../auth/decorator';
import { JwtGuard, RoleGuard } from '../auth/guard';
import { TypeRoleAdmin } from '@prisma/client';
import { RangeDateDto } from '../helpers/dto/range-date.dto';
import { CreateCategoryNewsDto, UpdateCategoryNewsDto } from './dto/create-category-news.dto';


@Controller('news')
export class NewsController {
    constructor(
        private readonly newsService: NewsService,
        private readonly httpHelper: HttpHelper,
    ) { }


    /*
      |--------------------------------------------------------------------------
      | Category News Enpoint
      |--------------------------------------------------------------------------
    */

    @Post("category")
    @UseGuards(JwtGuard, RoleGuard)
    @Roles(TypeRoleAdmin.ADMIN, TypeRoleAdmin.SUPER_ADMIN)
    async createCategoryNews(@Body() dto: CreateCategoryNewsDto, @Res() res) {
        const result = await this.newsService.createCategoryNews(dto)
        return this.httpHelper.formatResponse(res, HttpStatus.CREATED, result)
    }

    @Put("category/:id")
    @UseGuards(JwtGuard, RoleGuard)
    @Roles(TypeRoleAdmin.ADMIN, TypeRoleAdmin.SUPER_ADMIN)
    async updateCategoryNews(@Body() dto: UpdateCategoryNewsDto, @Res() res, @Param("id") id: string) {
        await this.newsService.updateCategoryNews(id, dto);
        return this.httpHelper.formatResponse(res, HttpStatus.OK, {})
    }

    @Delete("category/:id")
    @UseGuards(JwtGuard, RoleGuard)
    @Roles(TypeRoleAdmin.ADMIN, TypeRoleAdmin.SUPER_ADMIN)
    async deleteCategoryNews(@Res() res, @Param("id") id: string) {
        await this.newsService.deleteCategoryNews(id)
        return this.httpHelper.formatResponse(res, HttpStatus.OK, {})
    }

    @Get("category")
    async getAllCategoryNews(
        @Res() res
    ) {
        const result = await this.newsService.findAllCategoryNews();
        return this.httpHelper.formatResponse(res, HttpStatus.OK, result)
    }

    @Get("category/:id")
    async getOneCategoryNews(@Res() res, @Param("id") id: string) {
        const result = await this.newsService.findCategoryNewsById(id)
        return this.httpHelper.formatResponse(res, HttpStatus.OK, result)
    }

    /*
      |--------------------------------------------------------------------------
      | News Enpoint
      |--------------------------------------------------------------------------
    */
    @Post()
    @UseGuards(JwtGuard, RoleGuard)
    @Roles(TypeRoleAdmin.ADMIN, TypeRoleAdmin.SUPER_ADMIN)
    async createNews(@Body() dto: CreateNewsDto, @Res() res) {
        const result = await this.newsService.createNews(dto);
        return this.httpHelper.formatResponse(res, HttpStatus.CREATED, result)
    }

    @Put(":id")
    @UseGuards(JwtGuard, RoleGuard)
    @Roles(TypeRoleAdmin.ADMIN, TypeRoleAdmin.SUPER_ADMIN)
    async updateNews(@Body() dto: UpdateNewsDto, @Res() res, @Param("id") id: string) {
        await this.newsService.updateNews(id, dto);
        return this.httpHelper.formatResponse(res, HttpStatus.OK, {})
    }

    @Delete(":id")
    @UseGuards(JwtGuard, RoleGuard)
    @Roles(TypeRoleAdmin.ADMIN, TypeRoleAdmin.SUPER_ADMIN)
    async deleteNews(@Res() res, @Param("id") id: string) {
        await this.newsService.deleteNews(id);
        return this.httpHelper.formatResponse(res, HttpStatus.OK, {})
    }

    @Get()
    async getNewsByRangeDate(
        @Query() dto: RangeDateDto,
        @Res() res
    ) {
        const result = await this.newsService.findNewsByRangeDate(dto);
        return this.httpHelper.formatResponse(res, HttpStatus.OK, result)
    }

    @Get("current-day")
    async getNewsCurrentDay(
        @Res() res
    ) {
        const result = await this.newsService.findNewsByCurrentDay()
        return this.httpHelper.formatResponse(res, HttpStatus.OK, result)
    }

    @Get(":id")
    async getOneNews(@Res() res, @Param("id") id: string) {
        const result = await this.newsService.findNewsById(id)
        return this.httpHelper.formatResponse(res, HttpStatus.OK, result)
    }
}