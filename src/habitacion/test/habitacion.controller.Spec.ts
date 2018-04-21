import { expect } from 'chai';
import request = require('supertest');

describe('Habitacion Controller', () => {
    const port: string = '3000';
    const peticion = request.agent('http://localhost:' + port);

    it('GET /habitaciones', (done) => {
        peticion.get('/habitaciones')
        .end((err, res) => {
            expect(200).to.equal(res.status);
            expect('5ad7a1b15b87860488c04223').to.equal(res.body[0]._id);
            done();
        });
    });
});