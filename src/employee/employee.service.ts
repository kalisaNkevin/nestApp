import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { EmployeeModelDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(private prisma: PrismaService) {}
  async Employeee(dto: EmployeeModelDto) {
    const {
      name,
      email,
      phoneNumber,
      birthDate,
      position,
      status,
      nationalId,
      code,
    } = dto;
    const info = await this.prisma.employee.create({
      data: {
        name,
        email,
        phoneNumber,
        birthDate,
        position,
        status,
        nationalId,
        code,
      },
    });
    return { info };
  }

  async findAllEmployee() {
    return await this.prisma.employee.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        nationalId: true,
        phoneNumber: true,
        birthDate: true,
        position: true,
        status: true,
        code: true,
      },
    });
  }

  async updateEmployee(id: number, dto: EmployeeModelDto) {
    const {
      name,
      email,
      phoneNumber,
      birthDate,
      position,
      status,
      nationalId,
      code,
    } = dto;

    await this.prisma.employee.findUnique({ where: { id } });
    return await this.prisma.employee.update({
      where: { id },
      data: {
        name,
        email,
        nationalId,
        phoneNumber,
        birthDate,
        position,
        status,
        code,
      },
    });
  }

  async findOneEmployee(id: number) {
    return await this.prisma.employee.findUnique({ where: { id } });
  }

  async removeEmployee(id: number) {
    await this.prisma.employee.delete({
      where: { id },
    });
    return { message: 'employee deleted successfuly' };
  }
}
