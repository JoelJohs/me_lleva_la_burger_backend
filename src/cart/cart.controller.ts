/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { AddProductDto } from './dto/add-product.dto';
import { RemoveProductDto } from './dto/remove-product.dto';

@ApiTags('Carritos')
@Controller('carts')
export class CartController {
  constructor(private readonly cartService: CartService) { }

  @Post()
  @ApiOperation({ summary: 'Crear carrito' })
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los carritos' })
  findAll() {
    return this.cartService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener carrito por ID' })
  findOne(@Param('id') id: string) {
    return this.cartService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar carrito' })
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.update(+id, updateCartDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar carrito' })
  remove(@Param('id') id: string) {
    return this.cartService.remove(+id);
  }

  @Post(':id/add')
  @ApiOperation({ summary: 'Agregar producto al carrito' })
  addProduct(@Param('id') id: string, @Body() addProductDto: AddProductDto) {
    return this.cartService.addProduct(+id, addProductDto);
  }

  @Post(':id/remove')
  @ApiOperation({ summary: 'Remover producto del carrito' })
  removeProduct(@Param('id') id: string, @Body() removeProductDto: RemoveProductDto) {
    return this.cartService.removeProduct(+id, removeProductDto.id_producto);
  }

  @Post(':id/clear')
  @ApiOperation({ summary: 'Limpiar carrito' })
  clearCart(@Param('id') id: string) {
    return this.cartService.clearCart(+id);
  }

  @Get('customer/:customerId')
  @ApiOperation({ summary: 'Obtener carrito por cliente' })
  findByCustomer(@Param('customerId') customerId: string) {
    return this.cartService.findByCustomer(+customerId);
  }
}
