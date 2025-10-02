/* eslint-disable prettier/prettier */
import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
    @IsNumber()
    @IsNotEmpty()
    id_cliente: number;

    @IsNumber()
    @IsNotEmpty()
    id_empleado: number;

    @IsNumber()
    @IsNotEmpty()
    total: number;

    @IsString()
    @IsNotEmpty()
    estado: string;
}
