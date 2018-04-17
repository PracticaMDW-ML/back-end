import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { HabitacionDto } from '../dtos/habitacion.dto';
import { Habitacion } from '../interfaces/habitacion.interface';
import { HabitacionService } from '../services/habitacion.service';
import { TipoHabitacion } from 'interfaces/tipoHabitacion.enum';

@Controller(HabitacionController.URL)
export class HabitacionController {
    static URL: string = 'habitaciones';

    constructor(private readonly habitacionService: HabitacionService) {}

    @Post()
    async create(@Body() habitacionDto: HabitacionDto) {
        this.habitacionService.create(habitacionDto);
    }

    @Get()
    async findAll(): Promise<Habitacion[]> {
        this.createAuto();
        return this.habitacionService.findAll();
    }

    createAuto() {
        const habitacionDto: HabitacionDto = {
            servicios: ['TV', 'Minibar', 'Aire Acondicionado'],
            precioHora: 23,
            imagen: 'http://www.sdfsdfsfdsfsddf.com',
            tipoHabitacion: 'INDIVIDUAL',
        };
        this.create(habitacionDto);
    }
}