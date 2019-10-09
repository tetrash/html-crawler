import { Test, TestingModule } from '@nestjs/testing';
import { ScrapperController } from './scrapper.controller';
import { ScrapperService } from './scrapper.service';

describe('ScrapperDto Controller', () => {
  let controller: ScrapperController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScrapperService],
      controllers: [ScrapperController],
    }).compile();

    controller = module.get<ScrapperController>(ScrapperController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
