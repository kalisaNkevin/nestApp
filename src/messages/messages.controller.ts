import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessageModelDto } from './dto/update-message.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Message')
@ApiBearerAuth()
@Controller('messages')
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Message created successfuly' })
  @ApiBody({ type: MessageModelDto })
  message(@Body() dto: MessageModelDto) {
    return this.messagesService.message(dto);
  }

  @Get()
  findAllMessages() {
    return this.messagesService.findAllMessages();
  }

  @Delete(':id')
  removeMessage(@Param('id') id: string) {
    return this.messagesService.removeMessage(+id);
  }
}
