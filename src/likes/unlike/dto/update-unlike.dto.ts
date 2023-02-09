import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty } from 'class-validator';

export class UnlikeModelDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  public unlike: boolean;
}
