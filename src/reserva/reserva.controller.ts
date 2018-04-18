import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ReservaDto } from './reserva.dto';
import { Reserva } from './reserva.interface';
import { ReservaService } from './reserva.service';

@Controller(ReservaController.URL)
export class ReservaController {
    static URL: string = 'reservas';

    constructor(private readonly reservaService: ReservaService) {}

    @Post()
    async create(@Body() reservaDto: ReservaDto) {
        this.reservaService.create(reservaDto);
    }

    @Get()
    async findAll(): Promise<Reserva[]> {
        return this.reservaService.findAll();
    }
}