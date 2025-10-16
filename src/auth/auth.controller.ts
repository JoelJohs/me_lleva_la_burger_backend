/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginCustomerDto } from './dto/login-customer.dto';
import { LoginEmployeeDto } from './dto/login-employee.dto';
import { LoginResponse } from '../types';

@ApiTags('Autenticación')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login/customer')
    @ApiOperation({ summary: 'Login de cliente' })
    @ApiResponse({ status: 200, description: 'Login exitoso' })
    @ApiResponse({ status: 401, description: 'Credenciales inválidas' })
    loginCustomer(@Body() loginDto: LoginCustomerDto): Promise<LoginResponse> {
        return this.authService.loginCustomer(loginDto);
    }

    @Post('login/employee')
    @ApiOperation({ summary: 'Login de empleado' })
    @ApiResponse({ status: 200, description: 'Login exitoso' })
    @ApiResponse({ status: 401, description: 'Credenciales inválidas' })
    loginEmployee(@Body() loginDto: LoginEmployeeDto): Promise<LoginResponse> {
        return this.authService.loginEmployee(loginDto);
    }
}
