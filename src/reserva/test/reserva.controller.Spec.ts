import { expect } from 'chai';
import request = require('supertest');
import { ReservaService } from '../reserva.service';

describe('Reserva Controller', () => {
    const port: string = '3000';
    const peticion = request.agent('http://localhost:' + port);

    it('GET /reservas', (done) => {
        peticion.get('/reservas')
        .end((err, res) => {
            expect(200).to.equal(res.status);
            expect(3).to.equal(res.body.length);
            done();
        });
    });

    it('GET /reservas/:id', (done) => {
        peticion.get('/reservas/5ad7a1b15b87860488c04229')
        .end((err, res) => {
            expect(200).to.equal(res.status);
            expect(36).to.equal(res.body.precio);
            done();
        });
    });

    it('PATCH /reservas', (done) => {
        peticion.patch('/reservas/5ad7a1b15b87860488c04229')
        .end((err, res) => {
            expect(1).to.equal(res.body.n);
            done();
          });
    });

});