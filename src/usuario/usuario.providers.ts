import { Connection } from 'mongoose';
import { UsuarioSchema } from './usuario.schema';

export const usuariosProviders = [
    {
        provide: 'UsuarioModelToken',
        useFactory: (connection: Connection) => connection.model('Usuario', UsuarioSchema),
        inject: ['DbConnectionToken'],
    },
];