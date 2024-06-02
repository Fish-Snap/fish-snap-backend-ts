import {
    Body,
    Controller,
    Get,
    Put,
    HttpStatus,
    Param,
    Post,
    Res,
    Delete,
    Query,
    UseGuards,
} from '@nestjs/common';
import { FishService } from './fish.service';
import { HttpHelper } from '../helpers/http-helper';


@Controller('fish')
export class FishController {
    constructor(
        private readonly fishService: FishService,
        private readonly httpHelper: HttpHelper,
    ) { }

}