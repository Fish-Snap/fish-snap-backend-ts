import { Injectable } from '@nestjs/common';
import { FishRepository } from './fish.repository';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class FishService {
    constructor(
        private readonly fishRepository: FishRepository,
        private readonly authService: AuthService
    ) { }

    async createFishHistory(token: string, file: Express.Multer.File) {
        const { sub } = await this.authService.decodeJwtToken(token)
        return await this.fishRepository.createFishHistory(sub, file)
    }

    async findManyFishHistoryByIdUser(token: string) {
        const { sub } = await this.authService.decodeJwtToken(token)
        return await this.fishRepository.findManyFishHistoryByIdUser(sub)
    }
}