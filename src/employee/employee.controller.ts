import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeModelDto } from './dto/update-employee.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Employee')
@ApiBearerAuth()
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  Employeee(@Body() dto: EmployeeModelDto) {
    return this.employeeService.Employeee(dto);
  }

  @Get()
  findAllEmployee() {
    return this.employeeService.findAllEmployee();
  }

  @Get(':id')
  findOneEmployee(@Param('id') id: string) {
    return this.employeeService.findOneEmployee(+id);
  }

  @Patch(':id')
  updateEmployee(@Param('id') id: string, @Body() dto: EmployeeModelDto) {
    return this.employeeService.updateEmployee(+id, dto);
  }

  @Delete(':id')
  removeEmployee(@Param('id') id: string) {
    return this.employeeService.removeEmployee(+id);
  }
}
