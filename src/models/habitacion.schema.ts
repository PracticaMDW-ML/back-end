import * as mongoose from 'mongoose';

export const HabitacionSchema = new mongoose.Schema({
    id: String,
    servicios: [String],
    precioHora: Number,
    imagen: String,
    tipoHabitacion: ['INDIVIDUAL', 'DOBLE', 'TRIPLE', 'SUITE'],
});