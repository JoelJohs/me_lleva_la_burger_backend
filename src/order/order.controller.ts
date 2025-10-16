/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@ApiTags('Pedidos')
@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  @Post()
  @ApiOperation({ summary: 'Crear pedido' })
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los pedidos' })
  findAll() {
    return this.orderService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener pedido por ID' })
  findOne(@Param('id') id: string) {
    return this.orderService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar pedido' })
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar pedido' })
  remove(@Param('id') id: string) {
    return this.orderService.remove(+id);
  }

  @Post('from-cart/:cartId')
  @ApiOperation({ summary: 'Crear pedido desde carrito' })
  @ApiQuery({ name: 'employeeId', required: false })
  fromCart(@Param('cartId') cartId: string, @Query('employeeId') employeeId: string) {

    return this.orderService.fromCart(+cartId, Number(employeeId ?? 0));
  }

  @Get('customer/:customerId')
  @ApiOperation({ summary: 'Obtener pedidos por cliente' })
  findByCustomer(@Param('customerId') customerId: string) {
    return this.orderService.findByCustomer(+customerId);
  }

  @Get('employee/:employeeId')
  @ApiOperation({ summary: 'Obtener pedidos por empleado' })
  findByEmployee(@Param('employeeId') employeeId: string) {
    return this.orderService.findByEmployee(+employeeId);
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Actualizar estado del pedido' })
  patchStatus(@Param('id') id: string, @Body('estado') estado: string) {
    return this.orderService.patchStatus(+id, estado);
  }
}
