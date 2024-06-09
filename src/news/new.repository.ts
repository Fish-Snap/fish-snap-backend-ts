import { BadRequestException, Injectable } from '@nestjs/common';
import { NewsQuery } from '../prisma/queries/news/news.query';
import { CreateNewsDto, UpdateNewsDto } from './dto/create-news.dto';
import { UserQuery } from '../prisma/queries/user/user.query';
import { TypeNews } from '@prisma/client';
import { CreateCategoryNewsDto, UpdateCategoryNewsDto } from './dto/create-category-news.dto';
import { RangeDateDto } from '../helpers/dto/range-date.dto';
import { checkDateRange, isValidDateStringUsingTzTime } from '../helpers/helper';


@Injectable()
export class NewsRepository {
    constructor(
        private readonly newsQuery: NewsQuery,
        private readonly userQuery: UserQuery
    ) { }

    /*
      |--------------------------------------------------------------------------
      | News Repository
      |--------------------------------------------------------------------------
    */
    async findNewsByIdOrThrow(id: string) {
        const news = await this.newsQuery.findById(id);
        if (!news) {
            throw new BadRequestException('Berita tidak ditemukan');
        }
        return news
    }

    async findAllNews() {
        return await this.newsQuery.findAll();
    }

    async findNewsByRangeDate(dto: RangeDateDto) {
        if (
            !isValidDateStringUsingTzTime(dto.startDate) ||
            !isValidDateStringUsingTzTime(dto.endDate)
        ) {
            throw new BadRequestException('Invalid date. Please add timezone');
        }
        // count days between two dates
        const startDate = new Date(dto.startDate);
        const endDate = new Date(dto.endDate);
        checkDateRange(startDate, endDate, 31);
        return await this.newsQuery.findByRangeDate({ startDate, endDate });
    }

    async findNewsByCurrentDay() {
        return await this.newsQuery.findByCurrentDay();
    }

    async createNews(dto: CreateNewsDto) {
        await this.findCategoryNewsByIdOrThrow(dto.idCategoryNews);
        if (dto.idAdmin) {
            const admin = await this.userQuery.findById(dto.idAdmin);
            if (!admin) throw new BadRequestException('Admin tidak ditemukan');
            if (dto.type === TypeNews.INTERNAL) {
                dto.nameAuthor = admin.name
            }
        }

        return await this.newsQuery.create({
            title: dto.title,
            nameAuthor: dto.nameAuthor,
            content: dto.content,
            urlExternalNews: dto.urlExternalNews,
            urlHeaderImg: dto.urlHeaderImg,
            urlThumbImg: dto.urlThumbImg,
            type: dto.type,
            publicationAt: dto.publicationAt,
            idAdmin: dto.idAdmin,
            categoryNews: {
                connect: {
                    id: dto.idCategoryNews
                }
            }
        });
    }

    async updateNews(id: string, dto: UpdateNewsDto) {
        const news = await this.findNewsByIdOrThrow(id);

        if (dto.idAdmin) {
            const admin = await this.userQuery.findById(dto.idAdmin);
            if (!admin) throw new BadRequestException('Admin tidak ditemukan');
            if (dto.type === TypeNews.INTERNAL) {
                dto.nameAuthor = admin.name;
            }
        }

        const updateData: Partial<UpdateNewsDto> & { categoryNews?: { connect: { id: string } } } = {
            title: dto.title,
            nameAuthor: dto.nameAuthor,
            content: dto.content,
            urlExternalNews: dto.urlExternalNews,
            urlHeaderImg: dto.urlHeaderImg,
            urlThumbImg: dto.urlThumbImg,
            type: dto.type,
            publicationAt: dto.publicationAt,
            idAdmin: dto.idAdmin,
        };

        if (dto.idCategoryNews && dto.idCategoryNews !== news.idCategoryNews) {
            await this.findCategoryNewsByIdOrThrow(dto.idCategoryNews);
            updateData.categoryNews = {
                connect: {
                    id: dto.idCategoryNews,
                },
            };
        }

        return await this.newsQuery.update(id, updateData);
    }

    async deleteNews(id: string) {
        await this.findNewsByIdOrThrow(id);
        return await this.newsQuery.delete(id);
    }

    /*
      |--------------------------------------------------------------------------
      | Category News Repository
      |--------------------------------------------------------------------------
    */

    async findCategoryNewsByIdOrThrow(id: string) {
        const categoryNews = await this.newsQuery.findCategoryNewsById(id);
        if (!categoryNews) {
            throw new BadRequestException('Kategori berita tidak ditemukan');
        }
        return categoryNews
    }

    async findAllCategoryNews() {
        return await this.newsQuery.findAllCategoryNews();
    }

    async createCategoryNews(dto: CreateCategoryNewsDto) {
        return await this.newsQuery.createCategoryNews({
            name: dto.name,
            tags: dto.tags
        });
    }

    async updateCategoryNews(id: string, dto: UpdateCategoryNewsDto) {
        await this.findCategoryNewsByIdOrThrow(id);
        return await this.newsQuery.updateCategoryNews(id, {
            name: dto.name,
            tags: dto.tags && dto.tags.length > 0 ? dto.tags : undefined
        });
    }

    async deleteCategoryNews(id: string) {
        await this.findCategoryNewsByIdOrThrow(id);
        return await this.newsQuery.deleteCategoryNews(id);
    }
}