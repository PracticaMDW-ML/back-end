import { UsuarioDto } from '../usuario/user.dto';
import { HabitacionDto } from 'habitacion/habitacion.dto';

export class ReservaDto {
    readonly fechaEntrada: Date;
    readonly fechaSalida: Date;
    readonly precio: number;
    readonly abonada: boolean;
    readonly usuario: UsuarioDto;
    readonly habitacion: HabitacionDto;

}