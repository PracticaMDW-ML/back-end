import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppController } from './../../app.controller';
import {UsuarioController} from '../usuario.controller';
import {UsuarioService} from '../usuario.service';
import {UsuarioSchema} from '../usuario.schema';
import {MongooseModule} from "@nestjs/mongoose";
import {AppModule} from "../../app.module";
import {DatabaseModule} from "../../database/database.module";
import {UsuarioModule} from "../usuario.module";
import {Usuario} from "../usuario.interface";

describe('AppController', () => {
    let module: TestingModule;
    describe('UsuarioController', () => {
        let usuarioService: UsuarioService;
        let usuarioController: UsuarioController;
        beforeEach(async () => {
            const module = await Test.createTestingModule({
                controllers: [UsuarioController],
                components: [
                    UsuarioService,
                    {
                        provide: 'UsuarioModelToken',
                        useValue: Usuario,
                    },
                ],
            }).compile();
            usuarioService = module.get<UsuarioService>(UsuarioService);
            usuarioController = module.get<UsuarioController>(UsuarioController);
        });

        describe('findAll', () => {
            it('should return an array of cats', async () => {
                const result = ['test'];
                jest.spyOn(usuarioService, 'findAll').mockImplementation(() => result);
                expect(await usuarioController.findAll()).toBe(result);
            });
        });
    });
});