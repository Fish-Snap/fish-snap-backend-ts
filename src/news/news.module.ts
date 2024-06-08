import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MomentModule } from '@ccmos/nestjs-moment';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '../prisma/prisma.module';
import { HelperModule } from '../helpers/helper.module';
import { NewsService } from './news.service';
import { NewsRepository } from './new.repository';
import { NewsController } from './news.controller';


@Module({
    imports: [
        PrismaModule,
        JwtModule.register({}),
        MomentModule,
        ConfigModule,
        HelperModule,
    ],
    providers: [NewsService, NewsRepository],
    controllers: [NewsController],
    exports: [NewsService, NewsRepository],
})
export class NewsModule { }