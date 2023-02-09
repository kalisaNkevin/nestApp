import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CommentModelDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public comment: string;
}
