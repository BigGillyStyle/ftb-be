import { HttpModule, Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsController } from './news/news.controller';
import { NewsService } from './news/news.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, NewsController],
  providers: [AppService, NewsService, Logger],
})
export class AppModule {}
