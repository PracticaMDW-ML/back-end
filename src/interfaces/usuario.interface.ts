import { Document } from 'mongoose';

export interface Usuario extends Document {
  readonly usuario: string;
  readonly password: number;
  readonly correo: string;
}