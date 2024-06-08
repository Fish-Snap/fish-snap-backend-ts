import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ConfigModule } from '@nestjs/config';
import { DbService } from './db.service';
import { UserQuery } from './queries/user/user.query';
import { FishHistoryQuery } from './queries/fish-history/fish-history.query';
import { NewsQuery } from './queries/news/news.query';

@Module({
  imports: [ConfigModule],
  providers: [DbService, PrismaService, UserQuery, FishHistoryQuery, NewsQuery],
  exports: [PrismaService, DbService, UserQuery, FishHistoryQuery, NewsQuery],
})
export class PrismaModule { }
