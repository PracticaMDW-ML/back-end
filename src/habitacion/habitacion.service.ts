import { Component } from '@nestjs/common';
import { HabitacionDto } from './habitacion.dto';
import { Habitacion } from './habitacion.interface';
import { HabitacionSchema } from './habitacion.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TipoHabitacion } from './tipoHabitacion.enum';

@Component()
export class HabitacionService {
    constructor(@InjectModel(HabitacionSchema) private readonly habitacionModel: Model<Habitacion>) {}

    async create(habitacionDto: HabitacionDto): Promise<Habitacion> {
        const habitacion = new this.habitacionModel(habitacionDto);
        return await habitacion.save();
    }

    async findAll(): Promise<Habitacion[]> {
        return await this.habitacionModel.find().exec();
    }
    
    createAuto() {
        const habitacion: Habitacion = {
            servicios: ['TV', 'Minibar', 'Aire Acondicionado'],
            precioHora: 23,
            imagen: 'http://www.sdfsdfsfdsfsddf.com',
            tipoHabitacion: TipoHabitacion.INDIVIDUAL,
        };
        this.create(habitacion);
    }
}