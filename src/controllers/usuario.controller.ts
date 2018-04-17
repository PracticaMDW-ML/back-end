
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../interfaces/usuario.interface';

@Controller(UsuarioController.URL)
export class UsuarioController {
    static URL: string = 'usuario';
    constructor(private readonly usuarioService: UsuarioService) {}

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        this.usuarioService.create(createUserDto);
    }

    @Get()
    async findAll(): Promise<Usuario[]> {
        return this.usuarioService.findAll();
    }
}