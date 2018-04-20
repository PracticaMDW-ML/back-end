import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservaDto } from './reserva.dto';
import { Reserva } from './reserva.interface';
import { ReservaService } from './reserva.service';

@Controller(ReservaController.URL)
export class ReservaController {
    static URL: string = 'reservas';
    static ID: string = ':id';
    constructor(private readonly reservaService: ReservaService) {}

    @Post()
    async create(@Body() reservaDto: ReservaDto) {
        this.reservaService.create(reservaDto);
    }

    @Get()
    async findAll(): Promise<Reserva[]> {
        return this.reservaService.findAll();
    }

    @Get(ReservaController.ID)
    async findOne(@Param() param): Promise<Reserva> {
        return this.reservaService.findById(param.id);
    }

    @Patch(ReservaController.ID)
    async updatePayment(@Param() param): Promise<Reserva> {
        return this.reservaService.updatePayment(param.id);
    }

    @Delete(ReservaController.ID)
    async delete(@Param() param): Promise<Reserva> {
        return this.reservaService.delete(param.id);
    }
}