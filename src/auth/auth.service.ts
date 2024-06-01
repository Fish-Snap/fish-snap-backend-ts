import { BadRequestException, Injectable } from '@nestjs/common';

import { AuthRepository } from './auth.repository';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { ChangePasswordDto } from './dto/change-password.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly authRepository: AuthRepository
  ) { }

  async register(dto: RegisterUserDto) {
    return await this.authRepository.register(dto);
  }

  async verifyEmail(id: string, codeVerify: number) {
    return await this.authRepository.verifyEmail(id, codeVerify);
  }

  async login(dto: LoginUserDto) {
    return await this.authRepository.login(dto);
  }

  async refreshJwtToken(refreshToken: string) {
    return await this.authRepository.refreshJwtToken(refreshToken);
  }

  async changePassword(token: string, dto: ChangePasswordDto) {
    const { sub } = await this.authRepository.decodeJwtToken(token);
    return await this.authRepository.changePassword(sub, dto.password, dto.newPassword);
  }

  /*
    |--------------------------------------------------------------------------
    | Auth admin function
    |--------------------------------------------------------------------------
    */


}
