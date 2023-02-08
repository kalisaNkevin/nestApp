import { Injectable } from '@nestjs/common';
import { ArticleModelDto } from './dto/article-model.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}
  async article(dto: ArticleModelDto) {
    const { title, body } = dto;
    const blog = await this.prisma.article.create({
      data: {
        title,
        body,
      },
    });
    return { blog };
  }
  async getAllBlogs() {
    return await this.prisma.article.findMany({
      select: {
        id: true,
        title: true,
        body: true,
      },
    });
  }

  async findArticle(id: number) {
    return await this.prisma.article.findUnique({ where: { id } });
  }

  async updateArticle(id: number, dto: ArticleModelDto) {
    const { title, body } = dto;
    await this.prisma.article.findUnique({ where: { id } });
    return await this.prisma.article.update({
      where: { id },
      data: {
        title,
        body,
      },
    });
  }

  async removeaArticle(id: number) {
    await this.prisma.article.delete({
      where: { id },
    });
    return { message: 'article deleted successfuly' };
  }
}
