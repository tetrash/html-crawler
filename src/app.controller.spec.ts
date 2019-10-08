import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('scrapper', () => {
    it('should replace key words with link tag', () => {
      const input = {
        html: '<p>Polscy siatkarze w półfinale mistrzostw Europy w Lublanie chcieli przełamać złą passę w pojedynkach ze Słoweńcami. W dwóch poprzednich edycjach czempionatu Starego Kontynentu odpadli właśnie po porażkach z tymi rywalami. Niestety tym razem znów się nie udało.</p>',
        keys: [{key: 'mistrzostw Europy', url: 'http://www.infor.pl'}, {key: 'lasami państwowymi', url: 'http://www.dziennik.pl'}],
      };

      const expected = {
        html: '<p>Polscy siatkarze w półfinale <a href="http://www.infor.pl">mistrzostw Europy</a> w Lublanie chcieli przełamać złą passę w pojedynkach ze Słoweńcami. W dwóch poprzednich edycjach czempionatu Starego Kontynentu odpadli właśnie po porażkach z tymi rywalami. Niestety tym razem znów się nie udało.</p>',
      };

      expect(appController.scrapHtml(input)).toStrictEqual(expected);
    });
  });
});
