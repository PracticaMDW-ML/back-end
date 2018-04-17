import { Model } from 'mongoose';
import { Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario } from '../interfaces/usuario.interface';
import { UsuarioDto } from '../dtos/user.dto';
import { UsuarioSchema } from '../schemas/usuario.schema';

@Component()
export class UsuarioService {
  constructor(@InjectModel(UsuarioSchema) private readonly usuarioModel: Model<Usuario>) {}

  async create(userDto: UsuarioDto): Promise<Usuario> {
    const user = new this.usuarioModel(userDto);
    return await user.save();
  }

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioModel.find().exec();
  }
}