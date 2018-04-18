import * as jwt from 'jsonwebtoken';
import { Component } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import { Usuario } from '../usuario/usuario.interface';

@Component()
export class AuthService {
    static secret = 'hotelporhoras';

    constructor(private readonly usuarioService: UsuarioService) {}

    async createToken(usuario: string): Promise<any>  {
        const expiresIn = 60 * 30; // 30min
        const payload = { usuario };
        const token = jwt.sign(payload, AuthService.secret, { expiresIn });
        return token;
    }

    async validateUser(usuario: string): Promise<boolean> {
        const usuarioDocument: Usuario = await this.usuarioService.findByUsername(usuario);
        if (usuarioDocument) {
            return usuarioDocument.usuario === usuario;
        } else {
            return false;
        }
    }
}