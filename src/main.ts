import { NestFactory } from '@nestjs/core';
import { INestApplication, Logger } from '@nestjs/common';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

import { AppModule } from './app.module';
import { PORT, USE_FASTIFY } from "./common/config";
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
  let app: INestApplication;
  
  if(!USE_FASTIFY){
    app = await NestFactory.create(AppModule, { logger: ['log', 'error', 'warn'] });  
  } else {
    app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter({ logger: true }),
      { logger: ['log', 'error', 'warn'] }
    );
  }

  const config = new DocumentBuilder()
    .setTitle('REST service starter for RS School')
    .setDescription('REST API documentation')
    .setVersion('1.0.0')
    .addTag('RS School')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/doc', app, document);

  await app.listen(PORT, '0.0.0.0', () => {
    Logger.log(`Application is running on http://localhost:${PORT}`);
  });
}

start();