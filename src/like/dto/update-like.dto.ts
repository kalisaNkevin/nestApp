import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty } from 'class-validator';

export class LikeModelDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  public like: boolean;
}
