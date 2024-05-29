import { Injectable } from '@nestjs/common';
import { DbService } from '../../db.service';
import { CreateUserDto } from '../../../auth/dto/create-user.dto';
import { UpdateUserDto } from '../../../auth/dto/update-user.dto';


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

    async create(data: CreateUserDto) {
        return await this.prisma.user.create({ data })
    }

    async update(id: string, data: UpdateUserDto) {
        return await this.prisma.user.update({ where: { id }, data })
    }
}