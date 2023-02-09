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
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CommentService } from './comment.service';
import { CommentModelDto } from './dto/comment-model.dto';

@ApiTags('Articles')
@ApiBearerAuth()
@Controller('articles/comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  comment(@Body() dto: CommentModelDto) {
    return this.commentService.comment(dto);
  }

  @Get()
  @ApiOkResponse({ description: 'Article Generated' })
  @ApiBody({ type: CommentModelDto })
  getAllComments() {
    return this.commentService.getAllComments();
  }

  @Delete(':id')
  @ApiCreatedResponse({ description: 'Comment deleted successfuly' })
  removeComment(@Param('id') id: string) {
    return this.commentService.removeComment(+id);
  }
}
