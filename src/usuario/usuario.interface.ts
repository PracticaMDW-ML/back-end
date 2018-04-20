import { Document } from 'mongoose';

export class Usuario extends Document {
  readonly usuario: string;
  readonly password: string;
  readonly email: string;
}