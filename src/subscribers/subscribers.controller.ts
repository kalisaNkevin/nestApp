import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { SubscribersService } from './subscribers.service';
import { SubscribeModelDto } from './dto/update-subscriber.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Subscribers')
@ApiBearerAuth()
@Controller('subscribers')
export class SubscribersController {
  constructor(private readonly subscribersService: SubscribersService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Article created successfuly' })
  @ApiBody({ type: SubscribeModelDto })
  subscribe(@Body() dto: SubscribeModelDto) {
    return this.subscribersService.subscribe(dto);
  }

  @Get()
  @ApiOkResponse({ description: 'Subscribers Generated' })
  @ApiBody({ type: SubscribeModelDto })
  findAllSubscriber() {
    return this.subscribersService.findAllSubcribe();
  }

  @Delete(':id')
  @ApiCreatedResponse({ description: 'unsubscribed deleted successfuly' })
  removeSubscribe(@Param('id') id: string) {
    return this.subscribersService.removeSubscrbe(+id);
  }
}
