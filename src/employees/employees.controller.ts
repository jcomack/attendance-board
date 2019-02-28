import {Body, Controller, Get, Param, Patch, Post, Render} from '@nestjs/common';
import {EmployeesService} from './employees.service';
import {Employee} from './employee.entity';

@Controller('employees')
export class EmployeesController {
    constructor(private readonly employeesService: EmployeesService) {}

    @Get()
    @Render('employees/all')
    async root() {
        return { employees: await this.employeesService.findAll() };
    }

    @Get(':name')
    @Render('employees/view')
    async find(@Param('name') name) {
        return { employee: await this.employeesService.find( name ) };
    }

    @Get(':name/toggle')
    async set_status(@Param('name') name, @Param('status') status) {
        return { employee: await this.employeesService.toggle_presence( await this.employeesService.find( name ) ) };
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
