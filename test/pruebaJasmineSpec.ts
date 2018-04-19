import { HotelController } from '../src/hotel/hotel.controller';
import { HotelService } from '../src/hotel/hotel.service';
import { HotelSchema } from '../src/hotel/hotel.schema';
import { Hotel } from '../src/hotel/hotel.interface';
import { expect } from 'chai';
import request = require('supertest');

describe('something', () => {
    const peticion = request.agent('http://localhost:3008');

    it('should work', (done) => {
        peticion.get('/hoteles/5ad7a1b15b87860488c0422c')
        .end((err, res) => {
            console.log(res.body.nombre);
            expect('NH Madrid').to.equal(res.body.nombre);
            done();
        });

        // let hotel: Hotel;
        // hotel =  hotelService.findById('5ad7a1b15b87860488c0422c');
        // expect(1).to.equal(0);
    });
});