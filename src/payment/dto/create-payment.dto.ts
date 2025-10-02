/* eslint-disable prettier/prettier */
import { IsNumber, IsString, IsNotEmpty, IsDecimal } from 'class-validator';

export class CreatePaymentDto {
    @IsNumber()
    @IsNotEmpty()
    id_pedido: number;

    @IsString()
    @IsNotEmpty()
    metodo: string;

    @IsDecimal()
    @IsNotEmpty()
    monto: number;

    @IsString()
    @IsNotEmpty()
    estado: string;
}
