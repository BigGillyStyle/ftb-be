import { HttpModule, Logger } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { of } from 'rxjs';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';

describe('News Controller', () => {
  let controller: NewsController;
  let newsService: NewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [NewsService, Logger],
      controllers: [NewsController],
    }).compile();

    controller = module.get<NewsController>(NewsController);
    newsService = module.get<NewsService>(NewsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('fineOne', () => {
    it('should return an array of ticker news', async () => {
      const result = [
        {
          datetime: '2019-05-05T06:13:14-04:00',
          headline: 'Ep. 101: Why Apple Will Be The Only Smartphone Survivor',
          source: 'SeekingAlpha',
          url:
            'https://api.iextrading.com/1.0/stock/aapl/article/4827305238493572',
          summary:
            '        We\'re halfway through the March-quarter earnings season, and so far, aggregate earnings for the S&amp;P 500 are running ahead of expectations, and that has helped drive the market to new highs. Yet, as evidenced by results from 3M (MMM), Tesla (TSLA), Sherwin-Williams (SHW), Gorman-Rupp (…',
          related:
            'AAPL,BYND,DIV31061119,GRC,IND310,IND31061,MMM,NASDAQ01,SCITECH1,SHW,Telecommunications,TSLA',
          image:
            'https://api.iextrading.com/1.0/stock/aapl/news-image/4827305238493572',
        },
      ];

      jest.spyOn(newsService, 'findOne').mockImplementation(() => of(result));

      controller.findOne('aapl', { num: 5 }).subscribe(response => {
        expect(response).toBe(result);
      });
    });
  });
});
