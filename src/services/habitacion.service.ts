import { Component } from '@nestjs/common';
import { CreateHabitacionDto } from '../dtos/create-habitacion.dto';
import { Habitacion } from '../interfaces/habitacion.interface';
import { HabitacionSchema } from '../schemas/habitacion.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Component()
export class HabitacionService {
    constructor(@InjectModel(HabitacionSchema) private readonly habitacionModel: Model<Habitacion>) {}

    async create(createHabitacionDto: CreateHabitacionDto): Promise<Habitacion> {
        const createdHabitacion = new this.habitacionModel(createHabitacionDto);
        return await createdHabitacion.save();
    }

    async findAll(): Promise<Habitacion[]> {
        return await this.habitacionModel.find().exec();
    }
}