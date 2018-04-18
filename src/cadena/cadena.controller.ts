import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CadenaDto } from './cadena.dto';
import { Cadena } from './cadena.interface';
import { CadenaService } from './cadena.service';

@Controller(CadenaController.URL)
export class CadenaController {
    static URL: string = 'cadenas';
    static POBLAR: string = 'poblar';
    constructor(private readonly cadenaService: CadenaService) {}

    @Post()
    async create(@Body() cadenaDto: CadenaDto) {
        this.cadenaService.create(cadenaDto);
    }

    @Get('poblar')
    async findAll(): Promise<Cadena[]> {
        this.createAuto();
        return this.cadenaService.findAll();
    }

    createAuto() {
        const cadenaDto: CadenaDto = {
            nombre: 'Cadena Hotel 24 Horas',
        };
        this.create(cadenaDto);
    }
}