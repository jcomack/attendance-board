import {Body, Controller, Get, Param, Patch, Post} from '@nestjs/common';
import {EmployeesService} from './employees.service';
import {Employee} from './interfaces/employee';

@Controller('employees')
export class EmployeesController {
    constructor(private readonly employeesService: EmployeesService) {}

    @Get()
    findAll(): Employee[] {
        return this.employeesService.findAll();
    }

    @Get(':name')
    find(@Param('name') name) {
        this.employeesService.find( name );

        return false;
    }

    @Post()
    async add(@Body() createEmployee ) {
        this.employeesService.create(createEmployee);

        return 'Added!';
    }

    @Patch()
    async update(@Body() updateEmployee ) {
        this.employeesService.update('', updateEmployee);
    }
}
