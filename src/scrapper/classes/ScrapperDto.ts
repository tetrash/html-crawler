import { ApiModelProperty } from '@nestjs/swagger';
import { ScrapperKeysDto } from './ScrapperKeysDto';
import { ArrayMinSize, IsArray, IsInstance, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class ScrapperDto {
  @ApiModelProperty({ example: '<p>example html text</p>' })
  @IsNotEmpty()
  @IsString()
  html: string;

  @ApiModelProperty({
    type: [ScrapperKeysDto],
  })
  @Type(() => ScrapperKeysDto)
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @IsInstance(ScrapperKeysDto, {each: true})
  keys: ScrapperKeysDto[];

  constructor(html: string, keys: ScrapperKeysDto[]) {
    this.html = html;
    this.keys = keys;
  }
}
