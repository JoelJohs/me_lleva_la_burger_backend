/* eslint-disable prettier/prettier */
import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateEmployeeDto {
    @IsString()
    @IsNotEmpty()
    nombre_empleado: string;

    @IsString()
    @IsNotEmpty()
    apellido_empleado: string;

    @IsEmail()
    @IsNotEmpty()
    correo_empleado: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    contrasena_empleado: string;

    @IsString()
    @IsNotEmpty()
    telefono_empleado: string;

    @IsString()
    @IsNotEmpty()
    cargo: string;

    @IsString()
    @IsNotEmpty()
    estado_empleado: string;
}
