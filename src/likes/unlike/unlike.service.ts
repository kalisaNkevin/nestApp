import { Injectable } from '@nestjs/common';
import { UnlikeModelDto } from './dto/update-unlike.dto';

@Injectable()
export class UnlikeService {
  create(createUnlikeDto: UnlikeModelDto) {
    return 'This action adds a new unlike';
  }

  findAll() {
    return `This action returns all unlike`;
  }

  findOne(id: number) {
    return `This action returns a #${id} unlike`;
  }

  update(id: number, updateUnlikeDto: UnlikeModelDto) {
    return `This action updates a #${id} unlike`;
  }

  remove(id: number) {
    return `This action removes a #${id} unlike`;
  }
}
