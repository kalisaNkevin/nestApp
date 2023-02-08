import { Injectable } from '@nestjs/common';
import { LikeModelDto } from './dto/update-like.dto';

@Injectable()
export class LikeService {
  create(createLikeDto: LikeModelDto) {
    return 'This action adds a new like';
  }

  findAll() {
    return `This action returns all like`;
  }

  findOne(id: number) {
    return `This action returns a #${id} like`;
  }

  update(id: number, updateLikeDto: LikeModelDto) {
    return `This action updates a #${id} like`;
  }

  remove(id: number) {
    return `This action removes a #${id} like`;
  }
}
