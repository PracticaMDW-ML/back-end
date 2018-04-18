import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('')
    async authenticate(@Body() usuario: string): Promise<any> {
        const exito: boolean = await this.authService.validateUser(usuario);
        if (exito) {
            return await this.authService.createToken(usuario);
        } else {
            return null;
        }
    }
}