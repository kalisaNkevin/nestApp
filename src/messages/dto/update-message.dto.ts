import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class MessageModelDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @ApiProperty()
  public email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  public subject: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  public body: string;
}
