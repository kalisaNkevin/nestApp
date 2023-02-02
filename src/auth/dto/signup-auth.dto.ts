import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignupAuthDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  Password: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  public email: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 20, {
    message: 'password has to be at least betweem 3 and 20 characters long',
  })
  public password: string;
}
