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

  async findComment(id: number) {
    return await this.prisma.comments.findUnique({ where: { id } });
  }

  async updateComment(id: number, dto: CommentModelDto) {
    const { comment } = dto;
    await this.prisma.comments.findUnique({ where: { id } });
    return await this.prisma.comments.update({
      where: { id },
      data: {
        comment,
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
