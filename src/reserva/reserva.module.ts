import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservaController } from './reserva.controller';
import { ReservaService } from './reserva.service';
import { ReservaSchema } from './reserva.schema';
import {AuthModule} from "../auth/auth.module";

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Reserva', schema: ReservaSchema }]), AuthModule],
  controllers: [ReservaController],
  components: [ReservaService],
})
export class ReservaModule {}