import { Module } from '@nestjs/common';
import { SendgridService } from './senderGrid.services';
import { SendgridController } from './senderGrindController';

@Module({
  controllers: [SendgridController],
  providers: [SendgridService],
})
export class UsersModule {}
