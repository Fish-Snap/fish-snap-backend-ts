import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { MomentModule } from '@ccmos/nestjs-moment';
import { MailModule } from './mail/mail.module';
import { FishModule } from './fish/fish.module';
import { GatewayModule } from './gateway/gateway.module';
import { NewsModule } from './news/news.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MomentModule.forRoot({
      tz: 'Asia/Jakarta',
    }),
    AuthModule,
    PrismaModule,
    MailModule,
    FishModule,
    GatewayModule,
    NewsModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
