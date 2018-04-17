import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateHabitacionDto } from '../dtos/create-habitacion.dto';
import { HabitacionService } from '../services/habitacion.service';
import { Habitacion } from '../interfaces/habitacion.interface';

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
        return this.habitacionesService.findAll();
    }
}