import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';

const USER_BD: string = 'hotelporhoras';
const PASSWORD_BD: string = 'hotelporhoras';
const MONGODB_URI: string = `mongodb://${USER_BD}:${PASSWORD_BD}@ds247499.mlab.com:47499/hotelporhoras`;

@Module({
  imports: [MongooseModule.forRoot(MONGODB_URI)],
  controllers: [AppController],
  components: [],
})
export class AppModule {
}
