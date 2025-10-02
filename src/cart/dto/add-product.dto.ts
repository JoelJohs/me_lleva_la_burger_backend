/* eslint-disable prettier/prettier */
import { IsNumber, IsNotEmpty } from 'class-validator';

export class AddProductDto {
    @IsNumber()
    @IsNotEmpty()
    id_producto: number;

    @IsNumber()
    @IsNotEmpty()
    cantidad: number;
}
