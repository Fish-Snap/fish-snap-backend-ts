import { BadRequestException, Injectable } from '@nestjs/common';
import { FishHistoryQuery } from '../prisma/queries/fish-history/fish-history.query';
import { GatewayStorageBucketRepository } from '../gateway/repository/gateway-storage-bucket.repository';
import { GatewayService } from '../gateway/gateway.service';
import { _validateFile, getCustomFilename } from '../helpers/helper';


@Injectable()
export class FishRepository {
    constructor(
        private readonly fishHistoryQuery: FishHistoryQuery,
        private readonly gatewayService: GatewayService
    ) { }

    async createFishHistory(file: Express.Multer.File) {
        if (!file) throw new BadRequestException('Please upload file');
        let urlFileFoto: string;

        _validateFile(
            `Foto Ikan`,
            file,
            ['.jpeg', '.jpg', '.png'],
            1,
        );

        // upload file
        const remoteFileName = getCustomFilename(
            `fish-${Date.now()}-${Math.round(Math.random() * 1e9)}`,
            file,
        );
        urlFileFoto = await this.gatewayService.uploadFile(file, remoteFileName);
        return urlFileFoto

    }
}