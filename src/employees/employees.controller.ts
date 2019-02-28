import {BadRequestException, Body, Controller, Get, Param, Patch, Post, Render} from '@nestjs/common';
import {EmployeesService} from './employees.service';
import {CreateEmployeeDto} from './dto/create-employee.dto';
import {plainToClass} from 'class-transformer';
import {validate} from 'class-validator';
import {UpdateEmployeeDto} from './dto/update-employee.dto';

@Controller('employees')
export class EmployeesController {
    constructor(private readonly employeesService: EmployeesService) {}

    @Get()
    @Render('employees/all')
    async findAll() {
        return { employees: await this.employeesService.findAll() };
    }

    @Get(':name')
    @Render('employees/view')
    async find(@Param('name') name) {
        return { employee: await this.employeesService.find( name ) };
    }

    @Patch(':name/toggle')
    async toggleStatus(@Param('name') name ) {
        return await this.employeesService.toggleStatus( name );
    }

    @Post()
    async create(@Body() createEmployee ) {
        const employee = plainToClass( CreateEmployeeDto, createEmployee );
        const errors = await validate( employee );

        if (errors.length) {
            throw new BadRequestException('Invalid employee', errors.toString() );
        }

        return await this.employeesService.create(employee);
    }

    @Patch(':name')
    async update(@Param('name') name, @Body() updateEmployee ) {
        const employeeToUpdate = plainToClass(UpdateEmployeeDto, updateEmployee);

        return await this.employeesService.update(name, employeeToUpdate);
    }
}
