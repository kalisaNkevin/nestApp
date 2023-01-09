import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async getMyUser(id: string, req: Request){
    const decodeUserInfo = req.user as { id: string; email: string };
    const foundUser = await this.prisma.user.findUnique({ where: { id }});
    if (!foundUser) {
      throw new NotFoundException();
    }
    if (foundUser.id !== decodeUserInfo.id) {
      throw new ForbiddenException();
    }
    delete foundUser.hashedPassword;
    return { user: foundUser };
}
  async getUsers() {
    const users = await this.prisma.user.findMany({
      select: { id: true, email: true },
    });
    return { users };
 }
}