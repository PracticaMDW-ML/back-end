import * as passport from 'passport';
import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import {UsuarioModule} from '../usuario/usuario.module';
import {UsuarioService} from "../usuario/usuario.service";
import {usuariosProviders} from "../usuario/usuario.providers";

@Module({
    imports: [UsuarioModule],
    components: [AuthService, JwtStrategy, UsuarioService, ...usuariosProviders],
    controllers: [AuthController],
})
export class AuthModule implements NestModule {
    public configure(consumer: MiddlewaresConsumer) {
        consumer
            .apply(passport.authenticate('jwt', { session: false }))
            .forRoutes({ path: '/auth/authorized', method: RequestMethod.ALL });
    }
}