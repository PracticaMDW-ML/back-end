import { AuthModule } from './auth/auth.module';
import { CadenaModule } from './cadena/cadena.module';
import { HabitacionModule } from 'habitacion/habitacion.module';
import { HotelModule } from './hotel/hotel.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservaModule } from './reserva/reserva.module';
import { UsuarioModule } from './usuario/usuario.module';
import {UsuarioSchema} from "./usuario/usuario.schema";
import {AppController} from "./app.controller";
import {UsuarioService} from "./usuario/usuario.service";
import {DatabaseModule} from "./database/database.module";

const USER_BD = 'hotelporhoras';
const PASSWORD_BD = 'hotelporhoras';
const MONGODB_URI = `mongodb://${USER_BD}:${PASSWORD_BD}@ds247499.mlab.com:47499/hotelporhoras`;

@Module({
  imports: [
      DatabaseModule,
      MongooseModule.forFeature([{ name: 'Usuario', schema: UsuarioSchema }]),
      CadenaModule,
      HabitacionModule,
      HotelModule,
      UsuarioModule,
      ReservaModule,
      AuthModule,
  ],
  controllers: [AppController],
  exports: [DatabaseModule, UsuarioService],
})
export class AppModule {
}