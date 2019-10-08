import { Body, Controller, Post } from '@nestjs/common';
import { ApiConsumes } from '@nestjs/swagger';
import { ScrapperDto } from './classes/ScrapperDto';
import { ScrapperOutput } from './scrapper.interface';
import { ScrapperService } from './scrapper.service';

@Controller('scrapper')
export class ScrapperController {
  constructor(private readonly scrapperService: ScrapperService) {}

  @Post()
  @ApiConsumes('Application/json')
  scrapHtml(@Body() scrapperInput: ScrapperDto): ScrapperOutput {
    const response = {
      html: this.scrapperService.scrapHtml(scrapperInput),
    };

    return response;
  }
}
