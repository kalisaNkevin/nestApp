import { Injectable } from '@nestjs/common';
import { MessageModelDto } from './dto/update-message.dto';

@Injectable()
export class MessagesService {
  create(createMessageDto: MessageModelDto) {
    return 'This action adds a new message';
  }

  findAll() {
    return `This action returns all messages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: MessageModelDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
