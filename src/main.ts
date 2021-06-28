import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './errors/logger';

async function start() {
  
  const PORT = process.env['PORT'] ?? 4000;
  const app = await NestFactory.create(AppModule);

  app.listen(PORT, () => {
    logger.log('info',`Application is running on http://localhost:${PORT}`);
  });
}

start();