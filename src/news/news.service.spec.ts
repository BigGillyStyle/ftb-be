import { HttpModule, Logger } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { NewsService } from './news.service';

describe('NewsService', () => {
  let service: NewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [NewsService, Logger],
    }).compile();

    service = module.get<NewsService>(NewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
