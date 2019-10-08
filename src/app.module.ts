import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ScrapperService } from './scrapper/scrapper.service';
import { ScrapperController } from './scrapper/scrapper.controller';

@Module({
  imports: [],
  controllers: [AppController, ScrapperController],
  providers: [ScrapperService],
})
export class AppModule {}
