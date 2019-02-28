import { Injectable } from '@nestjs/common';
import {Employee} from './interfaces/employee';

@Injectable()
export class EmployeesService {
    private readonly employees: Employee[] = [];

    create(employee: Employee) {
        this.employees.push(employee);
    }

    find(name) {
        return this.employees.find( employee => {
            return employee.name === name;
        } );
    }

    findAll() {
        return this.employees;
    }

    update(name, body) {

    }
}
