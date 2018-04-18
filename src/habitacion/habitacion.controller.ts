import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { HabitacionDto } from './habitacion.dto';
import { Habitacion } from './habitacion.interface';
import { HabitacionService } from './habitacion.service';
import { TipoHabitacion } from 'habitacion/tipoHabitacion.enum';

@Controller(HabitacionController.URL)
export class HabitacionController {
    static URL: string = 'habitaciones';
    static POBLAR: string = 'poblar';
    constructor(private readonly habitacionService: HabitacionService) {}

    @Post()
    async create(@Body() habitacionDto: HabitacionDto) {
        this.habitacionService.create(habitacionDto);
    }

    @Get(this.POBLAR)
    async findAll(): Promise<Habitacion[]> {
        this.createAuto();
        return this.habitacionService.findAll();
    }

    createAuto() {
        const habitacionDto: HabitacionDto = {
            servicios: ['TV', 'Minibar', 'Aire Acondicionado'],
            precioHora: 23,
            imagen: 'http://www.sdfsdfsfdsfsddf.com',
            tipoHabitacion: TipoHabitacion.INDIVIDUAL,
        };
        this.create(habitacionDto);
    }
}