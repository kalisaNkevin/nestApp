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
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CommentService } from './comment.service';
import { CommentModelDto } from './dto/comment-model.dto';

@ApiTags('Comments')
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  comment(@Body() createCommentDto: CommentModelDto) {
    return this.commentService.comment(createCommentDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Article Generated' })
  @ApiBody({ type: CommentModelDto })
  getAllComments() {
    return this.commentService.getAllComments();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'User information' })
  @ApiUnauthorizedResponse({ description: 'Unauthorised' })
  findComment(@Param('id') id: string) {
    return this.commentService.findComment(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'Comment updated' })
  updateComment(@Param('id') id: string, @Body() dto: CommentModelDto) {
    return this.commentService.updateComment(+id, dto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ description: 'Comment deleted successfuly' })
  removeComment(@Param('id') id: string) {
    return this.commentService.removeComment(+id);
  }
}
