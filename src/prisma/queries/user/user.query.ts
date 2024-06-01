import { Injectable } from '@nestjs/common';
import { DbService } from '../../db.service';
import { RegisterUserDto } from '../../../auth/dto/register-user.dto';


@Injectable()
export class UserQuery extends DbService {
    async findById(id: string) {
        return await this.prisma.user.findUnique({
            where: {
                id,
            },
        });
    }

    async findByEmailOrUsername(emailOrUsername: string) {
        return await this.prisma.user.findFirst({
            where: {
                OR: [
                    { email: emailOrUsername },
                    { username: emailOrUsername },
                ],
            },
        });
    }

    async findAllWithoutPassword() {
        return await this.prisma.user.findMany({
            select: {
                id: true,
                username: true,
                email: true,
                role: true,
                status: true,
            },
        });
    }

    async register(payload: RegisterUserDto) {
        // expireAt 1 day
        const expireCodeVerify = new Date().getTime() + 1000 * 60 * 60 * 24
        // ngirim email verifikasi
        const min = 10000
        const max = 99999
        const codeVerify = Math.floor(Math.random() * (max - min + 1)) + min // Angka acak 5 digit
        return await this.prisma.user.create({
            data: {
                username: payload.username,
                email: payload.email,
                password: payload.password,
                codeVerify: codeVerify,
                expiresCodeVerifyAt: new Date(expireCodeVerify)
            }
        })
    }
}