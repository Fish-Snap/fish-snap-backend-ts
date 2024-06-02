import { Injectable } from '@nestjs/common';
import { DbService } from '../../db.service';
import { PrismaClient } from '@prisma/client';


@Injectable()
export class FishHistoryQuery extends DbService {

}