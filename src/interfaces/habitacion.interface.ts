import { Document } from 'mongoose';
import { TipoHabitacionEnum } from './tipoHabitacion.enum';

export interface Habitacion extends Document {
    readonly servicios: string[];
    readonly precioHora: number;
    readonly imagen: string;
    readonly tipoHabitacion: TipoHabitacionEnum;
}