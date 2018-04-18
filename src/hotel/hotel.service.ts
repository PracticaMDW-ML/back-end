import { Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HotelSchema } from './hotel.schema';
import { Hotel } from './hotel.interface';
import { Model } from 'mongoose';
import { HotelDto } from './hotel.dto';

@Component()
export class HotelService{
    constructor(@InjectModel(HotelSchema) private readonly hotelModel: Model<Hotel>){}

    async create(hotelDto: HotelDto): Promise<Hotel> {
        const hotel = new this.hotelModel(hotelDto);
        return await hotel.save();
    }

    async findAll(): Promise<Hotel[]> {
        return await this.hotelModel.find().exec();
    }

    async findOne(id: number): Promise<Hotel[]> {
        return await this.hotelModel.find({nombre: id}).exec();
    }
}