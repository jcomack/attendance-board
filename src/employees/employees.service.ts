import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeesService {
    constructor(
        @Inject('EmployeesRepositoryToken')
        private readonly employeeRepository: Repository<Employee>,
    ) {}

    create(employee: Employee) {
        this.employees.push(employee);
    }

    find(name) {
        return this.employees.find( employee => {
            return employee.name === name;
        } );
    }

    async findAll(): Promise<Employee[]> {
        return await this.employeeRepository.find();
    }

    update(name, body) {

    }
}
