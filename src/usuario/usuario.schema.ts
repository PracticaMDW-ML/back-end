import {Schema} from 'mongoose';

export const UsuarioSchema: Schema = new Schema({
    usuario: {type: String},
    password: {type: String},
    email: {type: String},
});