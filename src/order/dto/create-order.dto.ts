/* eslint-disable prettier/prettier */
import { IsNumber, IsString, IsNotEmpty, IsDecimal } from 'class-validator';

export class CreateOrderDto {
    @IsNumber()
    @IsNotEmpty()
    id_cliente: number;

    @IsNumber()
    @IsNotEmpty()
    id_empleado: number;

    @IsDecimal()
    @IsNotEmpty()
    total: number;

    @IsString()
    @IsNotEmpty()
    estado: string;
}
