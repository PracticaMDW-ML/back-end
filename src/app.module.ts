import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { HabitacionesController } from './controllers/habitacion.controller';
import { UsuarioController } from './controllers/usuario.controller';
import { HabitacionService } from './services/habitacion.service';
import { UsuarioService } from './services/usuario.service';
import { HabitacionModule } from 'habitacion.module';

const USER_BD: string = 'hotelporhoras';
const PASSWORD_BD: string = 'hotelporhoras';
const MONGODB_URI: string = `mongodb://${USER_BD}:${PASSWORD_BD}@ds247499.mlab.com:47499/hotelporhoras`;

@Module({
  imports: [MongooseModule.forRoot(MONGODB_URI), HabitacionModule],
  //controllers: [AppController],
  //components: [HabitacionService],

})
export class AppModule {
}
