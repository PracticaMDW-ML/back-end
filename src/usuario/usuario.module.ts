import {forwardRef, Global, Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioSchema } from './usuario.schema';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import {AppModule} from 'app.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Usuario', schema: UsuarioSchema }])],
  controllers: [UsuarioController],
  components: [UsuarioService],
  exports: [MongooseModule.forFeature([{ name: 'Usuario', schema: UsuarioSchema }]), UsuarioService],
})
export class UsuarioModule {}