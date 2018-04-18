import { Controller, Post, Body, Get, Param } from '@nestjs/common';
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

    @Get(':id')
    async findOne(@Param() name): Promise<Hotel[]> {
        return this.hotelService.findOne(name);
    }

    @Get()
    async findAll(): Promise<Hotel[]> {
        return this.hotelService.findAll();
    }
}