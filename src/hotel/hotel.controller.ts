import { Controller, Post, Body, Get } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelDto } from './hotel.dto';
import { Hotel } from './hotel.interface';

@Controller(HotelController.URL)
export class HotelController {
    static URL: string = 'hoteles';
    static POBLAR: string = 'poblar';
    constructor(private readonly hotelService: HotelService){}

    @Post()
    async create(@Body() hotelDto: HotelDto) {
        this.hotelService.create(hotelDto);
    }

    @Get()
    async findAll(): Promise<Hotel[]> {
        return this.hotelService.findAll();
    }

    createAuto(){
        const hotelDto: HotelDto = {
            nombre: 'NH',
            direccion: 'Madrid',
            director: 'Raquel',
            imagen: 'http://nhimagen.jpg',
            listaHabitaciones: null,
        };
        this.create(hotelDto);
    }
}