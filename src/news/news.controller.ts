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


@Controller('news')
export class NewsController {
    constructor(
        private readonly newsService: NewsService,
        private readonly httpHelper: HttpHelper,
    ) { }

}