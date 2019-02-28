import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { employeesProviders } from './employees.provider';
import { EmployeesService } from './employees.service';
import {EmployeesController} from './employees.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [ EmployeesController ],
    providers: [
        ...employeesProviders,
        EmployeesService,
    ],
})
export class EmployeesModule {}
