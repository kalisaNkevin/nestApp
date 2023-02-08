import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class RatingModelDto {
  @ApiProperty()
  Rates: number;

  @IsNotEmpty()
  @IsString()
  public rates: number;
}
