import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeesService {
    constructor(
        @InjectRepository(Employee)
        private readonly employeeRepository: Repository<Employee>,
    ) {}

    create(employee: Employee) {
        this.employeeRepository.create( employee );
    }

    find(name) {
        return this.employeeRepository.find( { where: { name } } );
    }

    async findAll(): Promise<Employee[]> {
        return await this.employeeRepository.find();
    }

    update(name, body) {

    }
}
