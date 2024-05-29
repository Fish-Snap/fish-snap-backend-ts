import { IsNotEmpty, IsString, IsEmail, IsEnum, IsOptional } from 'class-validator';


export class CreateUserDto {

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
