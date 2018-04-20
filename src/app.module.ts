import { AuthModule } from './auth/auth.module';
import { CadenaModule } from './cadena/cadena.module';
import { HotelModule } from './hotel/hotel.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservaModule } from './reserva/reserva.module';
import { HabitacionModule } from 'habitacion/habitacion.module';
import { UsuarioModule } from './usuario/usuario.module';
import {DatabaseModule} from "./database/database.module";
import {UsuarioService} from "./usuario/usuario.service";
import {usuariosProviders} from "./usuario/usuario.providers";

const USER_BD = 'hotelporhoras';
const PASSWORD_BD = 'hotelporhoras';
const MONGODB_URI = `mongodb://${USER_BD}:${PASSWORD_BD}@ds247499.mlab.com:47499/hotelporhoras`;

@Module({
  imports: [
      MongooseModule.forRoot(MONGODB_URI),
      DatabaseModule,
      CadenaModule,
      HabitacionModule,
      HotelModule,
      UsuarioModule,
      ReservaModule,
  ],
  components: [UsuarioService, ...usuariosProviders],
})
export class AppModule {
}