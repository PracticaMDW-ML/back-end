import * as mongoose from 'mongoose';

export const CadenaSchema = new mongoose.Schema({
    nombre: String,
    listaHoteles: [{ type: mongoose.Schema.ObjectId, ref: 'Hoteles' }],
});