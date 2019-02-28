import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesController } from './employees/employees.controller';
import { AttendancesController } from './attendances/attendances.controller';
import { EmployeesService } from './employees/employees.service';

@Module({
  imports: [],
  controllers: [AppController, EmployeesController, AttendancesController],
  providers: [AppService, EmployeesService],
})
export class AppModule {}
