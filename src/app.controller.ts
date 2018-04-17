import {Get, Controller, Inject} from '@nestjs/common';
import {HabitacionService} from './services/habitacion.service';

@Controller()
export class AppController {
  @Get()
  root(@Inject('HabitacionService') habitacionService: HabitacionService): string {
    habitacionService.createAuto();
    return 'Hello World!';
  }
}
