import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class EmployeeModelDto {
  @ApiProperty()
  Title: string;
  @ApiProperty()
  Description: string;
  @ApiProperty()
  Body: string;
  @ApiProperty()
  Published: boolean;

  @IsNotEmpty()
  @IsString()
  public title: string;

  @IsNotEmpty()
  @IsString()
  public description: string;

  @IsNotEmpty()
  @IsString()
  public body: string;

  @IsNotEmpty()
  @IsString()
  public published: boolean;
}
