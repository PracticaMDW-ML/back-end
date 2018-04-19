import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsuarioDto } from '../usuario/user.dto';

@Controller(AuthController.URL)
export class AuthController {
    static URL: string = 'auth';

    constructor(private readonly authService: AuthService) {}

    @Post()
    async authenticate(@Body() usuarioDto: UsuarioDto): Promise<any> {
        const exito: boolean = await this.authService.validateUser(usuarioDto.usuario);
        let token;
        if (exito) {
            token = await this.authService.createToken(usuarioDto.usuario);
        }
        return new Promise((resolve, reject) => {
            resolve(token);
        });
    }
}