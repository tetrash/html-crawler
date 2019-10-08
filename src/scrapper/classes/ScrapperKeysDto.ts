import { ApiModelProperty } from '@nestjs/swagger';

export class ScrapperKeysDto {
  @ApiModelProperty({ example: 'example' })
  key: string;
ś
  @ApiModelProperty({ example: 'http://example.com' })
  url: string;
}
