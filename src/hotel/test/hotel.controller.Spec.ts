import { expect } from "chai";
import request = require("supertest");

describe("something", () => {
  const port: string = "3000";
  const peticion = request.agent("http://localhost:" + port);

  /*it("/ POST", (done) => {
    peticion.post("/hoteles")
      .send({
        nombre: "NR",
        direccion: "Valencia",
        director: "Roberth",
        imagen: "http://nhimagen.jpg",
        listaHabitaciones: []
      })
      .expect("Content-type", /json/)
      .expect(201)
      .end((err, res) => {
        expect(201).to.equal(res.status);
        done();
      });
  });*/

  it('/ GET', (done) => {
    peticion.get('/hoteles')
      .end((err, res) => {
        expect(3).to.equal(res.body.length);
        done();
      });
  });

  it('/ GET id', (done) => {
    peticion.get('/hoteles/5ad7a1b15b87860488c0422c')
      .end((err, res) => {
        expect('NH Madrid').to.equal(res.body.nombre);
        done();
      });
  });

  /*it('/DELETE', (done) => {
    peticion.delete('/hoteles/5ad9a7657538c82d74db59e6')
      .end((err, res) => {
        expect(res.text).to.equal('true');
        done();
      });
  });*/
});
