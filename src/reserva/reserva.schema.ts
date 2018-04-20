import * as mongoose from 'mongoose';

export const ReservaSchema = new mongoose.Schema({
    fechaEntrada: Date,
    fechaSalida: Date,
    precio: Number,
    abonada: Boolean,
    listaUsuarios: { type: mongoose.Schema.ObjectId, ref: 'Usuario' },
    listaHabitaciones: { type: mongoose.Schema.ObjectId, ref: 'Habitacion' },
});