import { Injectable } from '@nestjs/common';
import { DbService } from '../../db.service';
import { Prisma, PrismaClient } from '@prisma/client';


@Injectable()
export class NewsQuery extends DbService {

    async create(payload: Prisma.NewsCreateInput, prismaTx?: PrismaClient) {
        const prisma = prismaTx || this.prisma;
        return await prisma.news.create({
            data: payload
        })
    }

    async update(id: string, payload: Prisma.NewsUpdateInput, prismaTx?: PrismaClient) {
        const prisma = prismaTx || this.prisma;
        return await prisma.news.update({
            where: {
                id
            },
            data: payload
        })
    }

    async delete(id: string, prismaTx?: PrismaClient) {
        const prisma = prismaTx || this.prisma;
        return await prisma.news.delete({
            where: {
                id
            }
        })
    }

    async findAll() {
        return await this.prisma.news.findMany();
    }

    async findById(id: string) {
        return await this.prisma.news.findUnique({
            where: {
                id
            }
        })
    }

    async findByRangeDate({ startDate, endDate }: { startDate: Date, endDate: Date }) {
        return await this.prisma.news.findMany({
            where: {
                createdAt: {
                    gte: startDate,
                    lte: endDate
                }
            }
        })
    }

    async findByCurrentDay() {
        return await this.prisma.news.findMany({
            where: {
                createdAt: {
                    gte: new Date(new Date().setHours(0, 0, 0, 0))
                }
            }
        })
    }
}