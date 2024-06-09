import { IsDateString, IsNotEmpty } from 'class-validator';

export class RangeDateDto {
    @IsNotEmpty()
    @IsDateString()
    startDate: string;

    @IsNotEmpty()
    @IsDateString()
    endDate: string;
}