import { expect } from 'chai';
import request = require('supertest');

describe('Usuarios Controller', () => {
    const port: string = '3000';
    const peticion = request.agent('http://localhost:' + port);

    it('GET /usuarios', (done) => {
        peticion.get('/usuarios')
        .end((err, res) => {
            expect(200).to.equal(res.status);
            expect(3).to.equal(res.body.length);
            done();
        });
    });
});