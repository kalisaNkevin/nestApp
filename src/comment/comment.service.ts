import { Injectable } from '@nestjs/common';
import { CommentModelDto } from './dto/comment-model.dto';

@Injectable()
export class CommentService {
  create(createCommentDto: CommentModelDto) {
    return 'This action adds a new comment';
  }

  findAll() {
    return `This action returns all comment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: CommentModelDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
