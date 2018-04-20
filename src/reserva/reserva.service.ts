import { Component } from '@nestjs/common';
import { ReservaDto } from './reserva.dto';
import { Reserva } from './reserva.interface';
import { ReservaSchema } from './reserva.schema';
import { InjectModel, MongooseModule } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Component()
export class ReservaService {
    constructor(@InjectModel(ReservaSchema) private readonly reservaModel: Model<Reserva>) {}

    async create(reservaDto: ReservaDto): Promise<Reserva> {
        const reserva = new this.reservaModel(reservaDto);
        return await reserva.save();
    }

    async findAll(): Promise<Reserva[]> {
        return await this.reservaModel.find();
    }

    async findById(id: string): Promise<Reserva> {
        return await this.reservaModel.findById(id).exec();
    }

    async updatePayment(id: string): Promise<Reserva>{
        const condition = {_id : id};
        const update =  {abonada: true};
        return await this.reservaModel.update(condition, update);
    }
}