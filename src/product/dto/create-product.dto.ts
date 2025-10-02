/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsDecimal, IsOptional } from 'class-validator';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    nombre_producto: string;

    @IsString()
    @IsNotEmpty()
    descripcion: string;

    @IsString()
    @IsNotEmpty()
    ingredientes: string;

    @IsDecimal()
    @IsNotEmpty()
    precio: number;

    @IsString()
    @IsOptional()
    foto?: string;

    @IsString()
    @IsNotEmpty()
    disponibilidad: string;
}
