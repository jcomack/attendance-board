import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AttendancesController } from './attendances/attendances.controller';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [ EmployeesModule ],
  controllers: [AppController, AttendancesController],
  providers: [AppService],
})
export class AppModule {}
