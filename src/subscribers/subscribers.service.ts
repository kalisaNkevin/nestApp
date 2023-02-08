import { Injectable } from '@nestjs/common';
import { SubscribeModelDto } from './dto/update-subscriber.dto';

@Injectable()
export class SubscribersService {
  create(createSubscriberDto: SubscribeModelDto) {
    return 'This action adds a new subscriber';
  }

  findAll() {
    return `This action returns all subscribers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subscriber`;
  }

  update(id: number, updateSubscriberDto: SubscribeModelDto) {
    return `This action updates a #${id} subscriber`;
  }

  remove(id: number) {
    return `This action removes a #${id} subscriber`;
  }
}
