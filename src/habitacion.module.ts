import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HabitacionesController } from './controllers/habitacion.controller';
import { HabitacionService } from './services/habitacion.service';
import { HabitacionSchema } from './schemas/habitacion.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Habitacion', schema: HabitacionSchema }])],
  controllers: [HabitacionesController],
  components: [HabitacionService],
})
export class HabitacionModule {}