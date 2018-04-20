import {Global, Module} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioSchema } from './usuario.schema';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import {usuariosProviders} from "./usuario.providers";
import {DatabaseModule} from "../database/database.module";

// @Module({
//   imports: [MongooseModule.forFeature([{ name: 'Usuario', schema: UsuarioSchema }])],
//   controllers: [UsuarioController],
//   components: [UsuarioService],
//   exports: [UsuarioService],
// })

@Module({
    imports: [DatabaseModule],
    controllers: [UsuarioController],
    components: [
        UsuarioService,
        ...usuariosProviders,
    ],
    exports: [UsuarioModule],
})
export class UsuarioModule {}