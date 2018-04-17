import { Model } from 'mongoose';
import { Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Habitacion } from '../interfaces/habitacion.interface';
import { CreateHabitacionDto } from '../dtos/create-habitacion.dto';
import { HabitacionSchema } from '../models/habitacion.schema';

@Component()
export class CatsService {
    // constructor(@InjectModel(CatSchema) private readonly catModel: Model<Cat>) {}
    //
    // async create(createCatDto: CreateCatDto): Promise<Cat> {
    //     const createdCat = new this.catModel(createCatDto);
    //     return await createdCat.save();
    // }
    //
    // async findAll(): Promise<Cat[]> {
    //     return await this.catModel.find().exec();
    // }
}