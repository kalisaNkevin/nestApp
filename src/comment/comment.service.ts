import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CommentModelDto } from './dto/comment-model.dto';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}
  async comment(dto: CommentModelDto) {
    const { comment } = dto;
    const idea = await this.prisma.comments.create({
      data: {
        comment,
      },
    });
    return { idea };
  }
  async getAllComments() {
    return await this.prisma.comments.findMany({
      select: {
        id: true,
        comment: true,
      },
    });
  }

  async removeComment(id: number) {
    await this.prisma.comments.delete({
      where: { id },
    });
    return { message: 'comment deleted successfuly' };
  }
}
