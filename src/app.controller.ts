import {Get, Controller, Inject} from '@nestjs/common';
import {HabitacionService} from './habitacion/habitacion.service';

@Controller()
export class AppController {
  @Get()
  root(@Inject('HabitacionService') habitacionService: HabitacionService): string {
    habitacionService.createAuto();
    return 'Hello World!';
  }
}
