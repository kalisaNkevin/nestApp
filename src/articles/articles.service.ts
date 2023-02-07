import { Injectable } from '@nestjs/common';
import { ArticleModelDto } from './dto/article-model.dto';

@Injectable()
export class ArticlesService {
  create(createArticleDto: ArticleModelDto) {
    return 'This action adds a new article';
  }

  findAll() {
    return `This action returns all articles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, _updateArticleDto: ArticleModelDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
