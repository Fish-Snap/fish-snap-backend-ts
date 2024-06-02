import { Injectable } from '@nestjs/common'
import { CreateFileStorageBucketDto } from './dto/create-file.dto'
import { GatewayStorageBucketRepository } from './repository/gateway-storage-bucket.repository'

@Injectable()
export class GatewayService {
    constructor(
        private readonly gatewayStorageBucketRepository: GatewayStorageBucketRepository,
    ) { }

    async uploadFile(file: Express.Multer.File, remoteFileName: string) {
        return await this.gatewayStorageBucketRepository.uploadFile(file, remoteFileName)
    }
}