import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class MessageModelDto {
  @ApiProperty()
  Email: string;
  @ApiProperty()
  Subject: string;
  @ApiProperty()
  Body: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  @IsString()
  public subject: string;

  @IsNotEmpty()
  @IsString()
  public body: string;
}
