import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ArticleModelDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  public title: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  public body: string;
}
