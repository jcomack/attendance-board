import {BadRequestException, Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
import {CreateEmployeeDto} from './dto/create-employee.dto';
import {UpdateEmployeeDto} from './dto/update-employee.dto';
import {validate} from 'class-validator';

@Injectable()
export class EmployeesService {
    constructor(
        @InjectRepository(Employee)
        private readonly employeeRepository: Repository<Employee>,
    ) {}

    async create(createEmployeeDto: CreateEmployeeDto[]) {
        const newEmployee = new Employee();

        return await this.employeeRepository.save( {...newEmployee, ...createEmployeeDto } );
    }

    async find(name) {
        return await this.employeeRepository.findOne( { where: { name } } );
    }

    async findAll(): Promise<Employee[]> {
        return await this.employeeRepository.find();
    }

    async toggleStatus(name) {
        const existingEmployee = await this.findUserByName(name);

        existingEmployee.status = !existingEmployee.status;

        return await this.employeeRepository.save( {...existingEmployee } );
    }

    async findUserByName(name: string): Promise<Employee> {
        const existingEmployee = await this.find( name );

        if ( ! existingEmployee ) {
            throw new BadRequestException( 'Invalid employee' );
        }

        return existingEmployee;
    }

    async validate( employee ) {
        const errors = await validate( employee );

        if ( errors.length ) {
            throw new BadRequestException('Invalid employee', errors.toString() );
        }
    }

    async update(name, updateEmployeeDto: UpdateEmployeeDto[]) {
        const existingEmployee = this.findUserByName(name);

        await this.validate( updateEmployeeDto );

        return await this.employeeRepository.save( {...existingEmployee, ...updateEmployeeDto } );
    }


}
