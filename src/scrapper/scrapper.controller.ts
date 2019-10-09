import { Body, Controller, HttpException, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConsumes,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiProduces,
} from '@nestjs/swagger';
import { ScrapperDto } from './classes/ScrapperDto';
import { ScrapperOutput } from './scrapper.interface';
import { ScrapperService } from './scrapper.service';
import { ScrapperResponseDto } from './classes/ScrapperResponseDto';

@Controller('scrapper')
export class ScrapperController {
  constructor(private readonly scrapperService: ScrapperService) {}

  @Post()
  @ApiConsumes('Application/json')
  @ApiProduces('Application/json')
  @ApiBadRequestResponse({ description: 'Request\'s body has failed validation' })
  @ApiCreatedResponse({ description: 'Success', type: ScrapperResponseDto })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  scrapHtml(@Body() scrapperInput: ScrapperDto): ScrapperOutput {
    const response = {
      html: this.scrapperService.scrapHtml(scrapperInput),
    };

    return response;
  }
}
