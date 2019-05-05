import { HttpService, Injectable, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { News } from './dto';

@Injectable()
export class NewsService {
  constructor(
    private readonly httpService: HttpService,
    private readonly logger: Logger,
  ) {}

  findOne(ticker: string, num: number = 5): Observable<News[]> {
    return this.httpService
      .get(`https://api.iextrading.com/1.0/stock/${ticker}/news/last/${num}`)
      .pipe(map(response => response.data));
  }
}
