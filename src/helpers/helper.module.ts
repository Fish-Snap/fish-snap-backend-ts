import { Module } from '@nestjs/common';
import { HttpHelper } from './http-helper';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [HttpHelper],
  exports: [HttpHelper],
})
export class HelperModule {}
