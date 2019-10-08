import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ScrapperKeysDto {
  @ApiModelProperty({ example: 'example' })
  @IsString()
  @IsNotEmpty()
  key: string;

  @ApiModelProperty({ example: 'http://example.com' })
  @IsString()
  @IsNotEmpty()
  url: string;

  constructor(key: string, url: string) {
    this.key = key;
    this.url = url;
  }
}
