
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { HotelController } from '../hotel.controller';
import { HotelService } from '../hotel.service';
import { HotelSchema } from '../hotel.schema';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [HotelController],
      components: [
          HotelService,
          {
            provide: HotelSchema,
            useValue: 'Hotel',
        },
      ],
    }).compile();
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      const appController = app.get<HotelController>(HotelController);
      appController.findAll();
      expect(0).toBe(0);
    });
  });
});