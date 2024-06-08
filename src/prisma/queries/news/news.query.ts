import { Injectable } from '@nestjs/common';
import { DbService } from '../../db.service';
import { RegisterUserDto } from '../../../auth/dto/register-user.dto';
import { PrismaClient } from '@prisma/client';


@Injectable()
export class NewsQuery extends DbService {

}