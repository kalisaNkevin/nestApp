import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { SubscribeModelDto } from './dto/update-subscriber.dto';

@Injectable()
export class SubscribersService {
  constructor(private prisma: PrismaService) {}
  async subscribe(dto: SubscribeModelDto) {
    const { email } = dto;
    await this.prisma.subscribers.create({
      data: {
        email,
      },
    });
    return { message: 'Subcribed successfully' };
  }

  async findAllSubcribe() {
    return await this.prisma.subscribers.findMany({
      select: {
        id: true,
        email: true,
      },
    });
  }

  async removeSubscrbe(id: number) {
    await this.prisma.subscribers.delete({
      where: { id },
    });
    return { message: 'unsubscribed successfuly' };
  }
}
