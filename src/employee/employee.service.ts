/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from 'src/types';

@Injectable()
export class EmployeeService {
  private employees: Employee[] = [];
  private nextId = 1;

  create(createEmployeeDto: CreateEmployeeDto): Employee {
    const employee: Employee = { id: this.nextId++, ...createEmployeeDto } as Employee;
    this.employees.push(employee);
    return employee;
  }

  findAll(): Employee[] {
    return this.employees;
  }

  findOne(id: number): Employee {
    const employee = this.employees.find(e => e.id === id);
    if (!employee) throw new NotFoundException(`Employee with ID ${id} not found`);
    return employee;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto): Employee {
    const employee = this.findOne(id);
    Object.assign(employee, updateEmployeeDto);
    return employee;
  }

  remove(id: number): { message: string; employee?: Employee } {
    const index = this.employees.findIndex(e => e.id === id);
    if (index === -1) throw new NotFoundException(`Employee with ID ${id} not found`);
    const [removed] = this.employees.splice(index, 1);
    return { message: `Employee with ID ${id} removed`, employee: removed };
  }
}
