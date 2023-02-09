import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { RatingModelDto } from './dto/update-rating.dto';

@Injectable()
export class RatingService {
  constructor(private prisma: PrismaService) {}
  async rate(dto: RatingModelDto) {
    const { rate } = dto;
    const ratings = await this.prisma.rates.create({
      data: {
        rate,
      },
    });
    return { ratings };
  }

  async findAllRates() {
    return await this.prisma.rates.findMany({
      select: {
        id: true,
        rate: true,
      },
    });
  }

  async removeRates(id: number) {
    await this.prisma.rates.delete({
      where: { id },
    });
    return { message: 'rates deleted successfully' };
  }
}
