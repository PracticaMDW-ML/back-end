import { Model } from 'mongoose';
import { Component } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario } from '../interfaces/usuario.interface';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UsuarioSchema } from '../models/usuario.schema';

@Component()
export class CatsService {
  constructor(@InjectModel(UsuarioSchema) private readonly usuarioModel: Model<Usuario>) {}

  async create(createUserDto: CreateUserDto): Promise<Usuario> {
    const createdUser = new this.usuarioModel(createUserDto);
    return await createdUser.save();
  }

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioModel.find().exec();
  }
}