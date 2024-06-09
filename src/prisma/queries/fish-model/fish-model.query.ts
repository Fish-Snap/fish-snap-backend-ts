import { BadRequestException, Injectable } from '@nestjs/common';
import { DbService } from '../../db.service';
import { PrismaClient } from '@prisma/client';


@Injectable()
export class FishModelQuery extends DbService {

    async findByCodeOrThrow(code: string) {
        const fishModel = await this.prisma.fishModel.findUnique({
            where: {
                code
            }
        })
        if (!fishModel) throw new BadRequestException('Model ikan tidak ditemukan');
        return fishModel
    }
}