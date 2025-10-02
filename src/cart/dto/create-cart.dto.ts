import { IsNumber, IsString, IsNotEmpty } from 'class-validator';

export class CreateCartDto {
    @IsNumber()
    @IsNotEmpty()
    id_cliente: number;

    @IsString()
    @IsNotEmpty()
    estado: string;
}
