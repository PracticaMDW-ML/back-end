import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateHabitacionDto } from '../dtos/create-habitacion.dto';
import { Habitacion } from '../interfaces/habitacion.interface';
import { HabitacionService } from '../services/habitacion.service';
import { TipoHabitacion } from 'interfaces/tipoHabitacion.enum';

@Controller(HabitacionesController.URL)
export class HabitacionesController {
    static URL: string = 'habitaciones';

    constructor(private readonly habitacionesService: HabitacionService) {}

    @Post()
    async create(@Body() createHabitacionDto: CreateHabitacionDto) {
        this.habitacionesService.create(createHabitacionDto);
    }

    @Get()
    async findAll(): Promise<Habitacion[]> {
        this.createAuto();
        return this.habitacionesService.findAll();
    }
    createAuto() {
        const createHabitacionDto: CreateHabitacionDto = {
            servicios: ['TV', 'Minibar', 'Aire Acondicionado'],
            precioHora: 23,
            imagen: 'http://www.sdfsdfsfdsfsddf.com',
            tipoHabitacion: 'INDIVIDUAL',
        };
        this.create(createHabitacionDto);
    }
}