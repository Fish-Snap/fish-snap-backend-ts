import { Injectable } from '@nestjs/common';
import { DbService } from '../../db.service';
import { Prisma, PrismaClient } from '@prisma/client';
import { IFishHistory } from './interfaces/IFish-history';


@Injectable()
export class FishHistoryQuery extends DbService {

    async createFishHistory(payload: IFishHistory, prismaTx?: PrismaClient) {
        const prisma = prismaTx || this.prisma;
        const { productRecipe, location } = payload
        const productRecipeConvert = JSON.parse(JSON.stringify(productRecipe)) as Prisma.JsonArray
        const locationConvert = JSON.parse(JSON.stringify(location)) as Prisma.JsonArray
        const payloadConvert = { ...payload, productRecipe: productRecipeConvert, location: locationConvert }
        return await prisma.fishScanHistory.create({
            data: payloadConvert
        });
    }
}