import { BadRequestException, Injectable } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { UserRepository } from './user.repository';
import { _validateFile } from '../helpers/helper';
import UpdateProfileDto from './dto/update-user.dto';


@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly authService: AuthService
    ) { }

    async updateProfile(token: string, dto: UpdateProfileDto, file?: Express.Multer.File) {
        const { sub } = await this.authService.decodeJwtToken(token);
        return await this.userRepository.updateProfile(sub, dto, file);
    }
}