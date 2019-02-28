import {Body, Controller, Get, Param, Patch, Post} from '@nestjs/common';
import {EmployeesService} from './employees.service';
import {Employee} from './employee.entity';

@Controller('employees')
export class EmployeesController {
    constructor(private readonly employeesService: EmployeesService) {}

    @Get()
    async findAll(): Promise<Employee[]> {
        // Call service to retrieve employees.
        return this.employeesService.findAll();
    }

    @Get(':name')
    find(@Param('name') name) {
        // Call service to retrieve single employee.

        return false;
    }

    @Post()
    async add(@Body() createEmployeeDto ) {
        // Call service to add single employee.

        return 'Added!';
    }

    @Patch()
    async update(@Body() updateEmployeeDto ) {

    }
}
