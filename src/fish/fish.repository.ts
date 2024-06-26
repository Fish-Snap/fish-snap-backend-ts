import { BadRequestException, Injectable } from '@nestjs/common';
import { FishHistoryQuery } from '../prisma/queries/fish-history/fish-history.query';
import { GatewayStorageBucketRepository } from '../gateway/repository/gateway-storage-bucket.repository';
import { GatewayService } from '../gateway/gateway.service';
import { FolderBucketType, _validateFile, getCustomFilename } from '../helpers/helper';
import { FishModelQuery } from '../prisma/queries/fish-model/fish-model.query';
import { PrismaService } from '../prisma/prisma.service';
import { FishScanHistory, PrismaClient } from '@prisma/client';
import { IFishHistory } from '../prisma/queries/fish-history/interfaces/IFish-history';


@Injectable()
export class FishRepository {
    constructor(
        private readonly fishHistoryQuery: FishHistoryQuery,
        private readonly fishModelQuery: FishModelQuery,
        private readonly gatewayService: GatewayService,
        private readonly prisma: PrismaService
    ) { }

    async createFishHistory(idUser: string, file: Express.Multer.File) {
        if (!file) throw new BadRequestException('Please upload file');
        _validateFile(
            `Foto Ikan`,
            file,
            ['.jpeg', '.jpg', '.png'],
            1,
        );
        try {
            // Start a transaction
            let result: FishScanHistory
            await this.prisma.$transaction(async (tx: PrismaClient) => {
                let urlFileFoto: string;
                const fishPredict = await this.gatewayService.predictFish(file)
                if (!fishPredict.isDetected) throw new BadRequestException('Ikan tidak terdeteksi');
                const fishModel = await this.fishModelQuery.findByCodeOrThrow(fishPredict.fish_detection);
                const productRecipe = generateRandomArray(fishModel.productRecipe);
                // upload file
                const remoteFileName = getCustomFilename(
                    `fish-${Date.now()}-${Math.round(Math.random() * 1e9)}`,
                    file,
                );
                urlFileFoto = await this.gatewayService.uploadFile(file, remoteFileName, FolderBucketType.FISH);
                const payload: IFishHistory = {
                    idUser: idUser,
                    urlImg: urlFileFoto,
                    codeFishModel: fishModel.code,
                    name: fishModel.name,
                    scientificName: fishModel.scientificName,
                    confidence: fishPredict.confidence,
                    otherNames: fishModel.otherNames,
                    description: fishModel.description,
                    location: fishModel.location as any,
                    productRecipe: productRecipe as any
                }
                result = await this.fishHistoryQuery.createFishHistory(payload, tx);
            });
            return result
        } catch (error) {
            throw error;
        }
    }

    async findManyFishHistoryByIdUser(idUser: string) {
        return await this.fishHistoryQuery.findManyByIdUser(idUser);
    }
}


function generateRandomArray(arr: any[]) {
    const maxLength = arr.length;
    const length = Math.max(1, Math.floor(Math.random() * (maxLength + 1))); // Minimal 1 data

    if (length === maxLength) {
        return [...arr]; // Return a shuffled copy of the original array
    }

    const shuffledArray = [...arr].sort(() => Math.random() - 0.5); // Shuffle the original array
    const randomArray = shuffledArray.slice(0, length); // Take the first 'length' elements

    return randomArray;
}