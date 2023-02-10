import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Request } from 'express';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async getMyUser(id: number, req: Request) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    const decodeUserInfo = req.user as { id: number; email: string };
    const foundUser = await this.prisma.user.findUnique({ where: { id } });
    if (!foundUser) {
      throw new NotFoundException();
    }
    if (foundUser.id !== decodeUserInfo.id) {
      throw new ForbiddenException();
    }
    delete foundUser.hash;
    return { user };
  }
  async getUsers() {
    return await this.prisma.user.findMany({
      select: { id: true, email: true },
    });
  }
}
