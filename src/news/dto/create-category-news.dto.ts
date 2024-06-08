import { PartialType } from '@nestjs/mapped-types';
import { ArrayNotEmpty, IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCategoryNewsDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsArray()
    @ArrayNotEmpty()
    tags?: string[];
}

export class UpdateCategoryNewsDto extends PartialType(CreateCategoryNewsDto) { }