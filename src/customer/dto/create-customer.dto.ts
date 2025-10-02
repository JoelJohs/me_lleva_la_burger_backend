/* eslint-disable prettier/prettier */
import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateCustomerDto {
    @IsString()
    @IsNotEmpty()
    nombre_cliente: string;

    @IsString()
    @IsNotEmpty()
    apellido_cliente: string;

    @IsEmail()
    @IsNotEmpty()
    correo_cliente: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    contrasena_cliente: string;

    @IsString()
    @IsNotEmpty()
    telefono_cliente: string;

    @IsString()
    @IsNotEmpty()
    direccion: string;

    @IsString()
    @IsNotEmpty()
    estado_cliente: string;
}
