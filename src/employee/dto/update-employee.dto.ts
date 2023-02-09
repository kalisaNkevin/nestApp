import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class EmployeeModelDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  public email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  public name: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  public nationalId: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  public phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  public birthDate: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  public status: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  public position: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  public code: number;
}
