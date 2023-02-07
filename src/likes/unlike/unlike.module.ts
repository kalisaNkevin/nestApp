import { Module } from '@nestjs/common';
import { UnlikeService } from './unlike.service';
import { UnlikeController } from './unlike.controller';

@Module({
  controllers: [UnlikeController],
  providers: [UnlikeService],
})
export class UnlikeModule {}
