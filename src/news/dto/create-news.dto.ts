import { PartialType } from '@nestjs/mapped-types';
import { TypeNews } from '@prisma/client';
import { ArrayNotEmpty, IsArray, IsDate, IsEnum, IsNotEmpty, IsOptional, IsString, ValidateIf } from 'class-validator';

export class CreateNewsDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @ValidateIf((o: CreateNewsDto) => o.type === TypeNews.INTERNAL)
    @IsArray()
    @ArrayNotEmpty()
    content: string[];

    @IsOptional()
    @IsString()
    urlThumbImg?: string;

    @IsOptional()
    @IsString()
    urlHeaderImg?: string;

    @ValidateIf((o: CreateNewsDto) => o.type === TypeNews.EXTERNAL)
    @IsNotEmpty()
    @IsString()
    urlExternalNews: string;

    @ValidateIf((o: CreateNewsDto) => o.type === TypeNews.EXTERNAL)
    @IsDate()
    @IsNotEmpty()
    publicationAt: Date;

    @ValidateIf((o: CreateNewsDto) => o.type === TypeNews.EXTERNAL)
    @IsString()
    @IsNotEmpty()
    nameAuthor: string;

    @IsNotEmpty()
    @IsEnum(TypeNews)
    type: TypeNews;

    @IsString()
    @IsNotEmpty()
    slugCategoryNews: string;
}

export class UpdateNewsDto extends PartialType(CreateNewsDto) { }