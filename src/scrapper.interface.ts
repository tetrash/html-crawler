export interface ScrapperInput {
  html: string;
  keys: Array<{ key: string, url: string }>;
}

export interface ScrapperOutput {
  html: string;
}

export interface ObjectLiteral {
  [key: string]: string;
}
