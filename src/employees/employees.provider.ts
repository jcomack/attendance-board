import { Connection, Repository } from 'typeorm';
import { Employee } from './employee.entity';

export const employeesProviders = [
    {
        provide: 'EmployeesRepositoryToken',
        useFactory: (connection: Connection) => connection.getRepository(Employee),
        inject: ['DbConnectionToken'],
    },
];
