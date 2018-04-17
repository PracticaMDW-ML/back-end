import * as mongoose from 'mongoose';

export const ReservaSchema = new mongoose.Schema({
    fechaEntrada: Date,
    fechaSalida: Date,
    precio: Number,
    abonada: Boolean,
    usuario: { type: mongoose.Schema.ObjectId, ref: 'Usuario' },
    habitacion: { type: mongoose.Schema.ObjectId, ref: 'Habitacion' },
});