import { PartialType } from '@nestjs/swagger';
import { CreatePayementDto } from './create-payement.dto';

export class UpdatePayementDto extends PartialType(CreatePayementDto) {}
