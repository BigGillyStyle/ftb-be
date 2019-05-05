import { Controller, Get, Logger, Param, Query } from '@nestjs/common';
import { ListNewsDto } from './dto';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
  constructor(
    private readonly newsService: NewsService,
    private logger: Logger,
  ) {}

  @Get(':ticker')
  findOne(@Param('ticker') ticker: string, @Query() query: ListNewsDto) {
    return this.newsService.findOne(ticker, query.num);
  }
}
