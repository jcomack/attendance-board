import {Body, Controller, Get, Param, Patch, Post} from '@nestjs/common';
import {EmployeesService} from './employees.service';

@Controller('employees')
export class EmployeesController {
    constructor(private readonly employeesService: EmployeesService) {}

    @Get()
    findAll(): [] {
        // Call service to retrieve employees.

        return [];
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
