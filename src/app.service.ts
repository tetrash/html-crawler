import { Injectable } from '@nestjs/common';
import { ObjectLiteral, ScrapperInput } from './scrapper.interface';

@Injectable()
export class AppService {
  scrapHtml(input: ScrapperInput): string {
    // Deal with potential duplicates in an array by mapping it to the object
    const keys: ObjectLiteral = input.keys.reduce((map, obj) => {
      map[obj.key] = obj.url;
      return map;
    }, {});

    const regex = new RegExp((Object.keys(keys)).join('|'), 'gi');
    return input.html.replace(regex, matched => `<a href="${keys[matched]}">${matched}</a>`);
  }
}
