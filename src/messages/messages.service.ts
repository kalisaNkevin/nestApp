import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { MessageModelDto } from './dto/update-message.dto';

@Injectable()
export class MessagesService {
  constructor(private prisma: PrismaService) {}
  async message(dto: MessageModelDto) {
    const { email, subject, body } = dto;
    const text = await this.prisma.message.create({
      data: {
        email,
        subject,
        body,
      },
    });
    return { text };
  }

  async findAllMessages() {
    return await this.prisma.message.findMany({
      select: {
        id: true,
        email: true,
        subject: true,
        body: true,
      },
    });
  }

  async removeMessage(id: number) {
    await this.prisma.message.delete({
      where: { id },
    });
    return { message: 'message deleted successfuly' };
  }
}
