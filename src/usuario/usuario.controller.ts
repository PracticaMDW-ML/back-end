import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsuarioDto } from './user.dto';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.interface';

@Controller(UsuarioController.URL)
export class UsuarioController {
    static URL: string = 'usuarios';
    static POBLAR: string = 'poblar';

    constructor(private readonly usuarioService: UsuarioService) {}

    @Post()
    async create(@Body() usuarioDto: UsuarioDto) {
        this.usuarioService.create(usuarioDto);
    }

    @Get(UsuarioController.POBLAR)
    async findAll(): Promise<Usuario[]> {
        this.createAuto();
        return this.usuarioService.findAll();
    }

    createAuto() {
        const usuario: Usuario = {
            usuario: '6',
            password: '6',
            email: '6',
        };
        this.create(usuario);
    }
}