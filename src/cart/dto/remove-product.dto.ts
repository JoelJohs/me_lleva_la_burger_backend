/* eslint-disable prettier/prettier */
import { IsNumber, IsNotEmpty } from 'class-validator';

export class RemoveProductDto {
    @IsNumber()
    @IsNotEmpty()
    id_producto: number;
}
