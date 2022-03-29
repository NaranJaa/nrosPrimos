const Request = require("request");

describe("Testing nros primos", () => {
  let server;

  beforeAll(() => {
    server = require("../index");
  });

  afterAll(() => {
    server.close();
  });

  describe("GET /api/nprimos/:nroDado", () => {
    let data = {
      params: {
        nroDado: 7,
      },
    };

    beforeAll((done) => {
      Request.get(
        `http://localhost:3000/api/nprimos/${data.params.nroDado}`,
        (error, response, body) => {
          expect(response.statusCode).toBe(200);
          expect(JSON.parse(response.body)).toEqual({
            error: false,
            status: 200,
            body: [2, 3, 5, 7],
          });
          data.statusCode = response.statusCode;
          data.body = JSON.parse(body);
          
          done();
        }
      );
    });

    it("Status 200", () => {
      expect(data.statusCode).toBe(200);
    });

    it("body", () => {
      expect(data.body).toEqual({
        error: false,
        status: 200,
        body: [2, 3, 5, 7],
      });
    });

  });

});
