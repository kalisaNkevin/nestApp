import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { LikeModelDto } from './dto/update-like.dto';

@Injectable()
export class LikeService {
  constructor(private prisma: PrismaService) {}
  async like(dto: LikeModelDto) {
    const { like } = dto;
    const love = await this.prisma.like.create({
      data: {
        like,
      },
    });
    return { love };
  }

  async findAllLikes() {
    return await this.prisma.like.findMany({
      select: {
        id: true,
        like: true,
      },
    });
  }

  async removeLikes(id: number) {
    await this.prisma.like.delete({
      where: { id },
    });
    return { message: 'like deleted successfuly' };
  }
}
