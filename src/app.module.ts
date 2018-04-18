import { HabitacionModule } from 'habitacion/habitacion.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioModule } from './usuario/usuario.module';
import { HotelModule } from './hotel/hotel.module';
import { CadenaModule } from './cadena/cadena.module';
import { ReservaModule } from './reserva/reserva.module';

const USER_BD = 'hotelporhoras';
const PASSWORD_BD = 'hotelporhoras';
const MONGODB_URI = `mongodb://${USER_BD}:${PASSWORD_BD}@ds247499.mlab.com:47499/hotelporhoras`;

@Module({
  imports: [
      MongooseModule.forRoot(MONGODB_URI),
      CadenaModule,
      HabitacionModule,
      HotelModule,
      UsuarioModule,
      ReservaModule,
  ],
})
export class AppModule {
}