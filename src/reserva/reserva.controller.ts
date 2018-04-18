import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ReservaDto } from './reserva.dto';
import { Reserva } from './reserva.interface';
import { ReservaService } from './reserva.service';

@Controller(ReservaController.URL)
export class ReservaController {
    static URL: string = 'reservas';
    static POBLAR: string = 'poblar';
    constructor(private readonly reservaService: ReservaService) {}

    @Post()
    async create(@Body() reservaDto: ReservaDto) {
        this.reservaService.create(reservaDto);
    }

    @Get(this.POBLAR)
    async findAll(): Promise<Reserva[]> {
        this.createAuto();
        return this.reservaService.findAll();
    }

    createAuto() {
        const reservaDto: ReservaDto = {
            fechaEntrada: new Date(),
            fechaSalida: new Date(),
            precio: 0,
            abonada: false,
            usuario: null,
            habitacion: null,
        };
        this.create(reservaDto);
    }
}