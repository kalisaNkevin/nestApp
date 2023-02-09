import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PayementsService } from './payements.service';
import { PaymentModelDto } from './dto/update-payement.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Payments')
@ApiBearerAuth()
@Controller('payements')
export class PayementsController {
  constructor(private readonly payementsService: PayementsService) {}

  @Post()
  create(@Body() createPayementDto: PaymentModelDto) {
    return this.payementsService.create(createPayementDto);
  }

  @Get()
  findAll() {
    return this.payementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.payementsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePayementDto: PaymentModelDto) {
    return this.payementsService.update(+id, updatePayementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.payementsService.remove(+id);
  }
}
