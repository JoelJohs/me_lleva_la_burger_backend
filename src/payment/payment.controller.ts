/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@ApiTags('Pagos')
@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) { }

  @Post()
  @ApiOperation({ summary: 'Crear pago' })
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.create(createPaymentDto);
  }

  @Post('process')
  @ApiOperation({ summary: 'Procesar pago' })
  process(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.process(createPaymentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los pagos' })
  findAll() {
    return this.paymentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener pago por ID' })
  findOne(@Param('id') id: string) {
    return this.paymentService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar pago' })
  update(@Param('id') id: string, @Body() updatePaymentDto: UpdatePaymentDto) {
    return this.paymentService.update(+id, updatePaymentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar pago' })
  remove(@Param('id') id: string) {
    return this.paymentService.remove(+id);
  }

  @Get('order/:orderId')
  @ApiOperation({ summary: 'Obtener pago por pedido' })
  findByOrder(@Param('orderId') orderId: string) {
    return this.paymentService.findByOrder(+orderId);
  }
}

