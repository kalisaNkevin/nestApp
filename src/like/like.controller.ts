import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { LikeService } from './like.service';
import { LikeModelDto } from './dto/update-like.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Articles')
@ApiBearerAuth()
@Controller('articles/like')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @Post()
  like(@Body() dto: LikeModelDto) {
    return this.likeService.like(dto);
  }

  @Get()
  @ApiOkResponse({ description: 'Article Generated' })
  findAllLikes() {
    return this.likeService.findAllLikes();
  }

  @Delete(':id')
  @ApiCreatedResponse({ description: 'Like deleted successfuly' })
  removeLikes(@Param('id') id: string) {
    return this.likeService.removeLikes(+id);
  }
}
