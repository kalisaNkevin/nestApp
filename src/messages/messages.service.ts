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

  findAll() {
    return `This action returns all messages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: MessageModelDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
