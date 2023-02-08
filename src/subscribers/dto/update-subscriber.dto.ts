import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SubscribeModelDto {
  @ApiProperty()
  Email: string;

  @IsNotEmpty()
  @IsString()
  public email: string;
}
