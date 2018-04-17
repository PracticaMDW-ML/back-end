import * as mongoose from 'mongoose';

export const UsuarioSchema = new mongoose.Schema({
    id: String,
    usuario: String,
    password: String,
    email: String,
});