import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (POST)', () => {
    const input = {
      html: '<p>Polscy siatkarze w półfinale mistrzostw Europy w Lublanie chcieli przełamać złą passę w pojedynkach ze Słoweńcami. W dwóch poprzednich edycjach czempionatu Starego Kontynentu odpadli właśnie po porażkach z tymi rywalami. Niestety tym razem znów się nie udało.</p>',
      keys: [{key: 'mistrzostw Europy', url: 'http://www.infor.pl'}, {key: 'lasami państwowymi', url: 'http://www.dziennik.pl'}],
    };

    const expected = {
      html: '<p>Polscy siatkarze w półfinale <a href="http://www.infor.pl">mistrzostw Europy</a> w Lublanie chcieli przełamać złą passę w pojedynkach ze Słoweńcami. W dwóch poprzednich edycjach czempionatu Starego Kontynentu odpadli właśnie po porażkach z tymi rywalami. Niestety tym razem znów się nie udało.</p>',
    };

    return request(app.getHttpServer())
      .post('/')
      .send(input)
      .expect(201)
      .expect(expected);
  });
});
