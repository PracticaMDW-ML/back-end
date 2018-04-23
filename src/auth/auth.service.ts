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
        return jwt.sign(payload, AuthService.secret, { expiresIn });
    }

    async validateUser(usuario: string): Promise<boolean> {
        const usuarioDocument: Usuario = await this.usuarioService.findByUsuario(usuario);
        if (usuarioDocument) {
            return usuarioDocument.usuario === usuario;
        } else {
            return false;
        }
    }

    /*
     async getUserFromToken(token: string): Promise<string> {
        const usuario = null;
        jwt.verify(token, AuthService.secret, (err, decoded) => {
            if (!err) {
                const payload = jwt.decode(token, AuthService.secret);
                return payload.usuario;
            }
        });
        console.log(usuario);
        return usuario;
    }
     */
}