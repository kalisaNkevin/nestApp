import { Test, TestingModule } from '@nestjs/testing';
import { UnlikeService } from './unlike.service';

describe('UnlikeService', () => {
  let service: UnlikeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnlikeService],
    }).compile();

    service = module.get<UnlikeService>(UnlikeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
