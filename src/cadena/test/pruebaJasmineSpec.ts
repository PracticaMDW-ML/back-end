import { expect } from 'chai';
import request = require('supertest');

describe('something', () => {
    const port: string = '3000';
    const peticion = request.agent('http://localhost:' + port);

    it('should work', (done) => {
        peticion.get('/hoteles/5ad7a1b15b87860488c0422c')
        .end((err, res) => {
            expect('NH Madrid').to.equal(res.body.nombre);
            done();
        });
    });
});