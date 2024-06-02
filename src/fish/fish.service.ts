import { Injectable } from '@nestjs/common';
import { FishRepository } from './fish.repository';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class FishService {
    constructor(
        private readonly FishRepository: FishRepository,
        private readonly authService: AuthService
    ) { }

    async createFishHistory(file: Express.Multer.File) {
        return await this.FishRepository.createFishHistory(file)
    }
}