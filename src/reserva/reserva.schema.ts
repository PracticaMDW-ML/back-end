import * as mongoose from 'mongoose';

export const ReservaSchema = new mongoose.Schema({
    fechaEntrada: Date,
    fechaSalida: Date,
    precio: Number,
    abonada: Boolean,
    usuarios: { type: mongoose.Schema.ObjectId, ref: 'Usuario' },
    habitacions: { type: mongoose.Schema.ObjectId, ref: 'Habitacion' },
});