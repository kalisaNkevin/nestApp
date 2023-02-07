import { Test, TestingModule } from '@nestjs/testing';
import { UnlikeController } from './unlike.controller';
import { UnlikeService } from './unlike.service';

describe('UnlikeController', () => {
  let controller: UnlikeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnlikeController],
      providers: [UnlikeService],
    }).compile();

    controller = module.get<UnlikeController>(UnlikeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
