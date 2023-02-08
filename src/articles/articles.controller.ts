import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiUnauthorizedResponse,
  ApiBody,
  ApiTags,
} from '@nestjs/swagger';
import { ArticlesService } from './articles.service';
import { ArticleModelDto } from './dto/article-model.dto';

@ApiTags('Articles')
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Article created successfuly' })
  @ApiBody({ type: ArticleModelDto })
  article(@Body() dto: ArticleModelDto) {
    return this.articlesService.article(dto);
  }

  @Get()
  @ApiOkResponse({ description: 'Article Generated' })
  @ApiBody({ type: ArticleModelDto })
  getAllBlogs() {
    return this.articlesService.getAllBlogs();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'User information' })
  @ApiUnauthorizedResponse({ description: 'Unauthorised' })
  findArticle(@Param('id') id: string) {
    return this.articlesService.findArticle(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'Blog updated' })
  @ApiBody({ type: ArticleModelDto })
  updateArticle(@Param('id') id: string, @Body() dto: ArticleModelDto) {
    return this.articlesService.updateArticle(+id, dto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ description: 'Article deleted successfuly' })
  removeArticle(@Param('id') id: string) {
    return this.articlesService.removeaArticle(+id);
  }
}
