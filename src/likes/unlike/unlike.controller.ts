import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UnlikeService } from './unlike.service';
import { UnlikeModelDto } from './dto/update-unlike.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Unlike')
@Controller('unlike')
export class UnlikeController {
  constructor(private readonly unlikeService: UnlikeService) {}

  @Post()
  create(@Body() createUnlikeDto: UnlikeModelDto) {
    return this.unlikeService.create(createUnlikeDto);
  }

  @Get()
  findAll() {
    return this.unlikeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unlikeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUnlikeDto: UnlikeModelDto) {
    return this.unlikeService.update(+id, updateUnlikeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unlikeService.remove(+id);
  }
}
