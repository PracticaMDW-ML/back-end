import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsuarioDto } from '../dtos/user.dto';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../interfaces/usuario.interface';

@Controller(UsuarioController.URL)
export class UsuarioController {
    static URL: string = 'usuario';

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