import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

import { AppModule } from './app.module';
import { PORT, USE_FASTIFY } from "./common/config";
import { uncaughtExceptionLogger, unhandledRejectionLogger } from './errors/handlers';
import { logger } from './errors/logger';

async function start() {
  let app: INestApplication;
  
  if(!USE_FASTIFY){
    app = await NestFactory.create(AppModule);  
  } else {
    app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter({ logger: true }),
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

  process.on('unhandledRejection', unhandledRejectionLogger);

  process.on('uncaughtException', uncaughtExceptionLogger);

  await app.listen(PORT, '0.0.0.0', () => {
    logger.log('info', `Application is running on http://localhost:${PORT}`);
  });
}

start();