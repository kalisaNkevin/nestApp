import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LikeModelDto {
  @ApiProperty()
  Like: boolean;

  @IsNotEmpty()
  @IsString()
  public like: boolean;
}
