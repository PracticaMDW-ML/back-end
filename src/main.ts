import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import logger = require('morgan');
import expressStatusMonitor = require('express-status-monitor');

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(logger('dev'));
    app.use(expressStatusMonitor()); // http://localhost:3000/status
    const PORT: number = 3000;
    await app.listen(PORT, () => {
        console.log(`__________Application server listen at port ${PORT}___________`);
    });
}

bootstrap();
