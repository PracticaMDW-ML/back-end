import { Model } from 'mongoose';
import { Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Habitacion } from '../interfaces/habitacion.interface';
import { CreateHabitacionDto } from '../dtos/create-habitacion.dto';
import { HabitacionSchema } from '../schemas/habitacion.schema';

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