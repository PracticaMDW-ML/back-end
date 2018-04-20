import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsuarioDto } from './user.dto';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.interface';

@Controller(UsuarioController.URL)
export class UsuarioController {
    static URL: string = 'usuarios';

    constructor(private readonly usuarioService: UsuarioService) {}

    @Post()
    async create(@Body() usuarioDto: UsuarioDto) {
        this.usuarioService.create(usuarioDto);
    }

    @Get()
    async findAll(): Promise<Usuario[]> {
        return this.usuarioService.findAll();
    }
}