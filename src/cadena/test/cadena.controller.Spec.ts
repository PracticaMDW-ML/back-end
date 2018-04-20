import { expect } from 'chai';
import request = require('supertest');

describe('something', () => {
  const port: string = '3000';
  const peticion = request.agent('http://localhost:' + port);

  it('should work', (done) => {
    peticion.get('/cadenas')
      .end((err, res) => {
        expect(1).to.equal(res.body.length);
        done();
      });
  });
});