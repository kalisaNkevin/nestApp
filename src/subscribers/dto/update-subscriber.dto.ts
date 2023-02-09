import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SubscribeModelDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  public email: string;
}
