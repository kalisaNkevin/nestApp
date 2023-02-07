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
  create(@Body() createArticleDto: ArticleModelDto) {
    return this.articlesService.create(createArticleDto);
  }

  @Get()
  @ApiOkResponse({ description: 'User Generated' })
  @ApiBody({ type: ArticleModelDto })
  findAll() {
    return this.articlesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'User information' })
  @ApiUnauthorizedResponse({ description: 'Unauthorised' })
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'User Login' })
  @ApiBody({ type: ArticleModelDto })
  update(@Param('id') id: string, @Body() updateArticleDto: ArticleModelDto) {
    return this.articlesService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articlesService.remove(+id);
  }
}
