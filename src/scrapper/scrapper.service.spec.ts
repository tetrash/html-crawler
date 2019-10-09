import { Test, TestingModule } from '@nestjs/testing';
import { ScrapperService } from './scrapper.service';
import { ScrapperInput } from './scrapper.interface';

describe('ScrapperService', () => {
  let service: ScrapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScrapperService],
    }).compile();

    service = module.get<ScrapperService>(ScrapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('scrapper', () => {
    it('should wrap key words with link tags', () => {
      const input: ScrapperInput = {
        html:
          '<p>Polscy siatkarze w półfinale mistrzostw Europy w Lublanie chcieli przełamać złą passę w pojedynkach ze Słoweńcami. W dwóch poprzednich edycjach czempionatu Starego Kontynentu odpadli właśnie po porażkach z tymi rywalami. Niestety tym razem znów się nie udało.</p>',
        keys: [
          { key: 'mistrzostw Europy', url: 'http://www.infor.pl' },
          { key: 'lasami państwowymi', url: 'http://www.dziennik.pl' },
        ],
      };

      const expected =
        '<p>Polscy siatkarze w półfinale <a href="http://www.infor.pl">mistrzostw Europy</a> w Lublanie chcieli przełamać złą passę w pojedynkach ze Słoweńcami. W dwóch poprzednich edycjach czempionatu Starego Kontynentu odpadli właśnie po porażkach z tymi rywalami. Niestety tym razem znów się nie udało.</p>';

      expect(service.scrapHtml(input)).toStrictEqual(expected);
    });

    it('should take latest tags from array', () => {
      const input: ScrapperInput = {
        html:
          '<p>Polscy siatkarze w półfinale mistrzostw Europy w Lublanie chcieli przełamać złą passę w pojedynkach ze Słoweńcami. W dwóch poprzednich edycjach czempionatu Starego Kontynentu odpadli właśnie po porażkach z tymi rywalami. Niestety tym razem znów się nie udało.</p>',
        keys: [
          { key: 'mistrzostw Europy', url: 'first url' },
          { key: 'mistrzostw Europy', url: 'http://www.infor.pl' },
          { key: 'lasami państwowymi', url: 'http://www.dziennik.pl' },
        ],
      };

      const expected =
        '<p>Polscy siatkarze w półfinale <a href="http://www.infor.pl">mistrzostw Europy</a> w Lublanie chcieli przełamać złą passę w pojedynkach ze Słoweńcami. W dwóch poprzednich edycjach czempionatu Starego Kontynentu odpadli właśnie po porażkach z tymi rywalami. Niestety tym razem znów się nie udało.</p>';

      expect(service.scrapHtml(input)).toStrictEqual(expected);
    });
  });
});
