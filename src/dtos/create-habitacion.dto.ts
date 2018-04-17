import { TipoHabitacionEnum } from '../interfaces/tipoHabitacion.enum';

export class CreateHabitacionDto {
    readonly servicios: string[];
    readonly precioHora: number;
    readonly imagen: string;
    readonly tipoHabitacion: TipoHabitacionEnum;
}