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

describe('UsuarioController', () => {
    let usuarioService: UsuarioService;

    beforeEach(async () => {
            const module = await Test.createTestingModule({
            imports: [DatabaseModule, UsuarioModule,
                {
                    provide: 'UsuarioSchema',
                    useValue: UsuarioSchema,
                },
            ],
            controllers: [AppController, UsuarioController],
            components: [UsuarioService],
            }).compile();

            usuarioService = module.get<UsuarioService>(UsuarioService);
    });

    it('probando', () => {
        expect(usuarioService).toBeDefined();
    });
});
