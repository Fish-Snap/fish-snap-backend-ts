import { PartialType } from '@nestjs/mapped-types';
import { TypeNews } from '@prisma/client';
import { ArrayNotEmpty, IsArray, IsDate, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateNewsDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsArray()
    @ArrayNotEmpty()
    content: string[];

    @IsOptional()
    @IsString()
    urlThumbImg?: string;

    @IsOptional()
    @IsString()
    urlHeaderImg?: string;

    @IsOptional()
    @IsString()
    urlExternalNews?: string;

    @IsDate()
    @IsNotEmpty()
    publicationAt: Date;

    @IsOptional()
    @IsString()
    idAdmin?: string;

    @IsString()
    @IsNotEmpty()
    nameAuthor: string;

    @IsNotEmpty()
    @IsEnum(TypeNews)
    type: TypeNews;

    @IsString()
    @IsNotEmpty()
    idCategoryNews: string;
}

export class UpdateNewsDto extends PartialType(CreateNewsDto) { }