import { Model } from 'mongoose';
import { Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario } from './usuario.interface';
import { UsuarioDto } from './user.dto';
import { UsuarioSchema } from './usuario.schema';

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

  async findById(id: string): Promise<Usuario> {
      return await this.usuarioModel.findById(id).exec();
  }

  async findByUsername(username: string): Promise<Usuario> {
      const usuario: Usuario = await this.usuarioModel.findOne({username}).exec();
      return usuario;
  }
}