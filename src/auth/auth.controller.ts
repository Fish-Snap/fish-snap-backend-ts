import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
  Headers,
  Patch,
  Query,
  Render,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { HttpHelper } from '../helpers/http-helper';
import { AccessGuard, JwtGuard, RoleGuard } from './guard';
import { Access, Roles } from './decorator';
import { TokenType } from '../helpers/helper';
import { LoginUserDto } from './dto/login-user.dto';
import { Request } from 'express'
import { RegisterUserDto } from './dto/register-user.dto';
import { VerifyEmailDto } from './dto/verify-email.dto';
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private readonly httpHelper: HttpHelper,
  ) { }

  @Post('register')
  async register(@Body() dto: RegisterUserDto, @Res() res) {
    await this.authService.register(dto);
    return this.httpHelper.formatResponse(res, HttpStatus.CREATED, {})
  }

  @Get('verify')
  @Render('verify-email-success')
  async verifyEmail(@Query() dto: VerifyEmailDto) {
    await this.authService.verifyEmail(dto.idUser, dto.codeVerify);
  }


  @Post('login')
  async login(@Body() dto: LoginUserDto, @Res() res) {
    const token = await this.authService.login(dto);
    return this.httpHelper.formatResponse(res, HttpStatus.OK, token)
  }

  /*
    |--------------------------------------------------------------------------
    | Auth admin enpoint
    |--------------------------------------------------------------------------
    */


  /*
   |--------------------------------------------------------------------------
   | Auth helper function
   |--------------------------------------------------------------------------
   */

  @UseGuards(JwtGuard, AccessGuard)
  @Access(TokenType.FULL)
  @Post('refresh/token')
  refreshJwtToken(@Req() req: Request) {
    return this.authService.refreshJwtToken(req.headers.authorization)
  }
}
