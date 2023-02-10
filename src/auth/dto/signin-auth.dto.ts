import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthDto {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @ApiProperty()
  public email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @Length(3, 20, {
    message: 'password has to be at least betweem 3 and 20 characters long',
  })
  public password: string;

  @IsNotEmpty()
  @IsString()
  public firstName: string;

  @IsNotEmpty()
  @IsString()
  public lastName: string;

  @IsNotEmpty()
  @IsString()
  @Length(0, 10, {
    message: 'password has to be at least betweem 3 and 20 characters long',
  })
  public phoneNumber: string;
}
