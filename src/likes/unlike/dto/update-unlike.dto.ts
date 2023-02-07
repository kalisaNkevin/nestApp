import { PartialType } from '@nestjs/swagger';
import { CreateUnlikeDto } from './create-unlike.dto';

export class UpdateUnlikeDto extends PartialType(CreateUnlikeDto) {}
