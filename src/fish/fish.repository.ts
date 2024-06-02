import { Injectable } from '@nestjs/common';
import { FishHistoryQuery } from '../prisma/queries/fish-history/fish-history.query';


@Injectable()
export class FishRepository {
    constructor(
        private readonly fishHistoryQuery: FishHistoryQuery
    ) { }
}