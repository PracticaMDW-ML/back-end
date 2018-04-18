import { Component } from '@nestjs/common';
import { ReservaDto } from './reserva.dto';
import { Reserva } from './reserva.interface';
import { ReservaSchema } from './reserva.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Component()
export class ReservaService {
    constructor(@InjectModel(ReservaSchema) private readonly reservaModel: Model<Reserva>) {}

    async create(reservaDto: ReservaDto): Promise<Reserva> {
        const habitacion = new this.reservaModel(reservaDto);
        return await habitacion.save();
    }

    async findAll(): Promise<Reserva[]> {
        return await this.reservaModel.find().exec();
    }

    async findById(id: string): Promise<Reserva> {
        return await this.reservaModel.findById(id).exec();
    }

    async updatePago(id: string): Promise<Reserva>{
        const reserva = this.reservaModel.findById(id).exec();
        reserva.
    }
}