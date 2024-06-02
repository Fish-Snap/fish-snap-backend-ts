import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ConfigModule } from '@nestjs/config';
import { DbService } from './db.service';
import { UserQuery } from './queries/user/user.query';
import { FishHistoryQuery } from './queries/fish-history/fish-history.query';

@Module({
  imports: [ConfigModule],
  providers: [DbService, PrismaService, UserQuery, FishHistoryQuery],
  exports: [PrismaService, DbService, UserQuery, FishHistoryQuery],
})
export class PrismaModule { }
