import { expect } from 'chai';
import request = require('supertest');

describe('Cadena Controller', () => {
  const port: string = '3000';
  const peticion = request.agent('http://localhost:' + port);

  it('GET /cadenas', (done) => {
    peticion.get('/cadenas')
      .end((err, res) => {
        expect(1).to.equal(res.body.length);
        done();
      });
  });
});