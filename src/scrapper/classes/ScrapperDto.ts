import { ApiModelProperty } from '@nestjs/swagger';
import { ScrapperKeysDto } from './ScrapperKeysDto';

export class ScrapperDto {
  @ApiModelProperty({ example: '<p>example html text</p>' })
  html: string;

  @ApiModelProperty({
    type: [ScrapperKeysDto],
  })
  keys: ScrapperKeysDto[];
}
