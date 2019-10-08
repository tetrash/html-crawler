import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as packagejson from '../package.json';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
  }));

  const options = new DocumentBuilder()
    .setTitle(packagejson.name)
    .setDescription(packagejson.description)
    .setVersion(packagejson.version)
    .setHost('localhost:3000')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
