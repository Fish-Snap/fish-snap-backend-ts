import { Injectable } from '@nestjs/common';
import { FishRepository } from './fish.repository';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class FishService {
    constructor(
        private readonly FishRepository: FishRepository,
        private readonly authService: AuthService
    ) { }

}