import { Module } from "@nestjs/common";
import { GatewayService } from "./gateway.service";
import { PrismaModule } from '../prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { GatewayStorageBucketRepository } from "./repository/gateway-storage-bucket.repository";
import { HelperModule } from "../helpers/helper.module";

@Module({
    imports: [
        PrismaModule,
        HelperModule,
        ConfigModule,
    ],
    providers: [
        GatewayService,
        GatewayStorageBucketRepository,
    ],
    controllers: [],
    exports: [
        GatewayService,
    ]
})
export class GatewayModule { }