import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ScrapperInput, ScrapperOutput } from './scrapper.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  scrapHtml(@Body() payload: ScrapperInput): ScrapperOutput {
    const response = {
      html: this.appService.scrapHtml(payload),
    };

    return response;
  }
}
