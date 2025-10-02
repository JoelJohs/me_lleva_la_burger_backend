/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from 'src/types';

@Injectable()
export class CustomerService {
  private customers: Customer[] = [];
  private nextId = 1;

  create(createCustomerDto: CreateCustomerDto): Customer {
    const customer: Customer = { id: this.nextId++, ...createCustomerDto };
    this.customers.push(customer);
    return customer;
  }

  findAll(): Customer[] {
    return this.customers;
  }

  findOne(id: number): Customer {
    const customer = this.customers.find(c => c.id === id);
    if (!customer) {
      throw new NotFoundException(`Customer with ID ${id} not found`);
    }
    return customer;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto): Customer {
    const customer = this.findOne(id);
    Object.assign(customer, updateCustomerDto);
    return customer;
  }

  remove(id: number): { message: string; customer?: Customer } {
    const index = this.customers.findIndex(c => c.id === id);
    if (index === -1) throw new NotFoundException(`Customer with ID ${id} not found`);
    const [removed] = this.customers.splice(index, 1);
    return { message: `Customer with ID ${id} removed`, customer: removed };
  }
}
