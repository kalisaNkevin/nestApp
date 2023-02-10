import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { RatingService } from './rating.service';
import { RatingModelDto } from './dto/update-rating.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Rates')
@ApiBearerAuth()
@Controller('rating')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Article created successfuly' })
  @ApiBody({ type: RatingModelDto })
  rate(@Body() dto: RatingModelDto) {
    return this.ratingService.rate(dto);
  }

  @Get()
  @ApiOkResponse({ description: 'Subscribers Generated' })
  findAllRates() {
    return this.ratingService.findAllRates();
  }

  @Delete(':id')
  @ApiCreatedResponse({ description: 'unsubscribed deleted successfuly' })
  removeRatest(@Param('id') id: string) {
    return this.ratingService.removeRates(+id);
  }
}
