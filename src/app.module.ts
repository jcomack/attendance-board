import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AttendancesController } from './attendances/attendances.controller';
import { EmployeesModule } from './employees/employees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Connection} from 'typeorm';

@Module({
  imports: [ TypeOrmModule.forRoot(), EmployeesModule ],
  controllers: [AppController, AttendancesController],
  providers: [AppService],
})

export class AppModule {
  constructor(private readonly connection: Connection) {}
}
