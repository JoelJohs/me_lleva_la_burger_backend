/* eslint-disable prettier/prettier */
import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class CreatePaymentDto {
    @IsNumber()
    @IsNotEmpty()
    id_pedido: number;

    @IsString()
    @IsNotEmpty()
    metodo: string;

    @IsNumber()
    @IsNotEmpty()
    monto: number;

    @IsString()
    @IsNotEmpty()
    estado: string;
}
