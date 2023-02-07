import { Injectable } from '@nestjs/common';
import { CreateUnlikeDto } from './dto/create-unlike.dto';
import { UpdateUnlikeDto } from './dto/update-unlike.dto';

@Injectable()
export class UnlikeService {
  create(createUnlikeDto: CreateUnlikeDto) {
    return 'This action adds a new unlike';
  }

  findAll() {
    return `This action returns all unlike`;
  }

  findOne(id: number) {
    return `This action returns a #${id} unlike`;
  }

  update(id: number, updateUnlikeDto: UpdateUnlikeDto) {
    return `This action updates a #${id} unlike`;
  }

  remove(id: number) {
    return `This action removes a #${id} unlike`;
  }
}
