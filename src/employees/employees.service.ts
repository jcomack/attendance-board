import { Injectable } from '@nestjs/common';
import {Employee} from './interfaces/employee';

@Injectable()
export class EmployeesService {
    private readonly employees: Employee[] = [];

    create(employee: Employee) {
        this.employees.push(employee);
    }

    findAll() {
        return this.employees;
    }
}
