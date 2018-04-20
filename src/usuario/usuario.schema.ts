import * as mongoose from 'mongoose';

export const UsuarioSchema = new mongoose.Schema({
    usuario: { type: String },
    password: { type: String },
    email: { type: String },
});