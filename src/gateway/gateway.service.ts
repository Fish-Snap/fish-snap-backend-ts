import { Injectable } from '@nestjs/common'
import { GatewayStorageBucketRepository } from './repository/gateway-storage-bucket.repository'
import { FolderBucketType } from '../helpers/helper'
import { GatewayMlRepository } from './repository/gateway-ml.repository'

@Injectable()
export class GatewayService {
    constructor(
        private readonly gatewayStorageBucketRepository: GatewayStorageBucketRepository,
        private readonly gatewayMlRepository: GatewayMlRepository,
    ) { }

    async uploadFile(file: Express.Multer.File, remoteFileName: string, folder: FolderBucketType) {
        return await this.gatewayStorageBucketRepository.uploadFile(file, remoteFileName, folder)
    }

    async predictFish(file: Express.Multer.File) {
        return await this.gatewayMlRepository.httpPostPredictionFish(file)
    }
}