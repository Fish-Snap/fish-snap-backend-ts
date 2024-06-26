import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { NewsRepository } from './new.repository';
import { CreateNewsDto, UpdateNewsDto } from './dto/create-news.dto';
import { CreateCategoryNewsDto, UpdateCategoryNewsDto } from './dto/create-category-news.dto';
import { RangeDateDto } from '../helpers/dto/range-date.dto';


@Injectable()
export class NewsService {
    constructor(
        private readonly newsRepository: NewsRepository,
        private readonly authService: AuthService
    ) { }

    /*
      |--------------------------------------------------------------------------
      | News Service
      |--------------------------------------------------------------------------
    */

    async findNewsById(id: string) {
        return await this.newsRepository.findNewsByIdOrThrow(id);
    }

    async findNewsByRangeDate(dto: RangeDateDto) {
        if (!dto.startDate || !dto.endDate) return await this.newsRepository.findAllNews();
        return await this.newsRepository.findNewsByRangeDate(dto);
    }

    async findNewsByCurrentDay() {
        return await this.newsRepository.findNewsByCurrentDay();
    }

    async createNews(token: string, dto: CreateNewsDto) {
        const { sub } = await this.authService.decodeJwtToken(token)
        return await this.newsRepository.createNews(sub, dto);
    }

    async updateNews(token: string, id: string, dto: UpdateNewsDto) {
        const { sub } = await this.authService.decodeJwtToken(token)
        return await this.newsRepository.updateNews(id, sub, dto);
    }

    async deleteNews(id: string) {
        return await this.newsRepository.deleteNews(id);
    }

    /*
      |--------------------------------------------------------------------------
      | Category News Service
      |--------------------------------------------------------------------------
    */

    async findAllCategoryNews() {
        return await this.newsRepository.findAllCategoryNews();
    }

    async findCategoryNewsById(id: string) {
        return await this.newsRepository.findCategoryNewsByIdOrThrow(id);
    }

    async createCategoryNews(dto: CreateCategoryNewsDto) {
        return await this.newsRepository.createCategoryNews(dto);
    }

    async updateCategoryNews(id: string, dto: UpdateCategoryNewsDto) {
        return await this.newsRepository.updateCategoryNews(id, dto);
    }

    async deleteCategoryNews(id: string) {
        return await this.newsRepository.deleteCategoryNews(id);
    }
}