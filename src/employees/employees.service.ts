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

        await this.validate(createEmployeeDto);

        return await this.employeeRepository.save( {...newEmployee, ...createEmployeeDto } );
    }

    async find(name) {
        try {
            return await this.employeeRepository.findOneOrFail({where: {name}});
        } catch (e) {
            throw new BadRequestException( 'Invalid employee' );
        }
    }

    async findAll(): Promise<Employee[]> {
        return await this.employeeRepository.find();
    }

    async toggleStatus(name) {
        const existingEmployee = await this.find(name);

        existingEmployee.status = !existingEmployee.status;

        return await this.employeeRepository.save( { ...existingEmployee } );
    }

    async validate( employee ) {
        const errors = await validate( employee );

        if ( errors.length ) {
            throw new BadRequestException('Invalid employee', errors.toString() );
        }
    }

    async update(name, updateEmployeeDto: UpdateEmployeeDto[]) {
        const existingEmployee = this.find(name);

        await this.validate( updateEmployeeDto );

        return await this.employeeRepository.save( { ...existingEmployee, ...updateEmployeeDto } );
    }
}
