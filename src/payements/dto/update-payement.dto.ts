import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class PaymentModelDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public amount: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  public transactionType: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  public receiver: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  public sender: number;
}
