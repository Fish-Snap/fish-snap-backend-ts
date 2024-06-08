import { Injectable } from '@nestjs/common';
import { NewsQuery } from '../prisma/queries/news/news.query';


@Injectable()
export class NewsRepository {
    constructor(
        private readonly newsQuery: NewsQuery
    ) { }
}