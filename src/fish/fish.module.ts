import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MomentModule } from '@ccmos/nestjs-moment';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '../prisma/prisma.module';
import { HelperModule } from '../helpers/helper.module';
import { FishService } from './fish.service';
import { FishRepository } from './fish.repository';
import { FishHistoryQuery } from '../prisma/queries/fish-history/fish-history.query';
import { FishController } from './fish.controller';
import { AuthModule } from '../auth/auth.module';
import { GatewayModule } from '../gateway/gateway.module';

@Module({
    imports: [
        PrismaModule,
        JwtModule.register({}),
        MomentModule,
        ConfigModule,
        HelperModule,
        AuthModule,
        GatewayModule
    ],
    providers: [FishService, FishRepository, FishHistoryQuery],
    controllers: [FishController],
    exports: [FishService, FishRepository],
})
export class FishModule { }