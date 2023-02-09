import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UnlikeModelDto } from './dto/update-unlike.dto';

@Injectable()
export class UnlikeService {
  constructor(private prisma: PrismaService) {}
  async unlike(dto: UnlikeModelDto) {
    const { unlike } = dto;
    const dislike = await this.prisma.unlike.create({
      data: {
        unlike,
      },
    });
    return { dislike };
  }

  async findAllUnlike() {
    return await this.prisma.unlike.findMany({
      select: {
        id: true,
        unlike: true,
      },
    });
  }

  async removeUnlike(id: number) {
    await this.prisma.unlike.delete({
      where: { id },
    });
    return { message: 'unlike deleted successfuly' };
  }
}
