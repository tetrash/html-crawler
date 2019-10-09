import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ScrapperResponseDto {
  @ApiModelProperty({ example: '<p><a href="http://example.com">example</a> html text</p>' })
  @IsNotEmpty()
  @IsString()
  html: string;
}
