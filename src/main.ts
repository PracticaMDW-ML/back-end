import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import logger = require('morgan');
import expressStatusMonitor = require('express-status-monitor');
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger('dev'));
  app.use(expressStatusMonitor()); // http://localhost:3000/status
  await app.listen(3000);
}

bootstrap();
