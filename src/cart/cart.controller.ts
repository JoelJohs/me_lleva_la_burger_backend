/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { AddProductDto } from './dto/add-product.dto';
import { RemoveProductDto } from './dto/remove-product.dto';

@Controller('carts')
export class CartController {
  constructor(private readonly cartService: CartService) { }

  @Post()
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @Get()
  findAll() {
    return this.cartService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.update(+id, updateCartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartService.remove(+id);
  }

  @Post(':id/add')
  addProduct(@Param('id') id: string, @Body() addProductDto: AddProductDto) {
    return this.cartService.addProduct(+id, addProductDto);
  }

  @Post(':id/remove')
  removeProduct(@Param('id') id: string, @Body() removeProductDto: RemoveProductDto) {
    return this.cartService.removeProduct(+id, removeProductDto.id_producto);
  }

  @Post(':id/clear')
  clearCart(@Param('id') id: string) {
    return this.cartService.clearCart(+id);
  }

  @Get('customer/:customerId')
  findByCustomer(@Param('customerId') customerId: string) {
    return this.cartService.findByCustomer(+customerId);
  }
}
