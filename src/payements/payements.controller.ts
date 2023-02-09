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
import { AccModelDto } from './dto/acc-payment.dto';

@ApiTags('Payments')
@ApiBearerAuth()
@Controller('transaction')
export class PayementsController {
  constructor(private readonly payementsService: PayementsService) {}

  @Post('/deposit')
  create(@Body() createPayementDto: PaymentModelDto) {
    return this.payementsService.create(createPayementDto);
  }
  @Post('/transfer')
  creae(@Body() createPayementDto: PaymentModelDto) {
    return this.payementsService.create(createPayementDto);
  }
  @Post('/withdraw')
  creaer(@Body() createPayementDto: PaymentModelDto) {
    return this.payementsService.create(createPayementDto);
  }

  @Get('/balance')
  finAll() {
    return this.payementsService.findAll();
  }

  @Get()
  findAll() {
    return this.payementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.payementsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.payementsService.remove(+id);
  }
}
