import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UnlikeService } from './unlike.service';
import { UnlikeModelDto } from './dto/update-unlike.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Articles')
@ApiBearerAuth()
@Controller('articles/unlike')
export class UnlikeController {
  constructor(private readonly unlikeService: UnlikeService) {}

  @Post()
  unlike(@Body() dto: UnlikeModelDto) {
    return this.unlikeService.unlike(dto);
  }

  @Get()
  @ApiOkResponse({ description: 'Article Generated' })
  findAllUnlike() {
    return this.unlikeService.findAllUnlike();
  }

  @Delete(':id')
  @ApiCreatedResponse({ description: 'Unlike deleted successfuly' })
  removeUnlike(@Param('id') id: string) {
    return this.unlikeService.removeUnlike(+id);
  }
}
