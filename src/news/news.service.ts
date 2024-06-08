import { Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { NewsRepository } from './new.repository';


@Injectable()
export class NewsService {
    constructor(
        private readonly newsRepository: NewsRepository,
        private readonly authService: AuthService
    ) { }

}