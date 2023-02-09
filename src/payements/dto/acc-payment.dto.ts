import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AccModelDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public accNumber: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  public balance: string;
}
