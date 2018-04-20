import { Model } from 'mongoose';
import {Component, Inject} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario } from './usuario.interface';
import { UsuarioDto } from './user.dto';
import { UsuarioSchema } from './usuario.schema';

@Component()
export class UsuarioService {
  constructor(@Inject('UsuarioModelToken') private readonly usuarioModel: typeof Model) {}

  async create(userDto: UsuarioDto): Promise<Usuario> {
    const user = new this.usuarioModel(userDto);
    return await user.save();
  }

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioModel.find().exec();
  }

  async findById(id: string): Promise<Usuario> {
      return await this.usuarioModel.findById(id).exec();
  }

  async findByUsuario(usuario: string): Promise<Usuario> {
      const username: Usuario = await this.usuarioModel.findOne({usuario}).exec();
      return username;
  }
}