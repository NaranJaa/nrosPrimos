const response = require("../../response");
const service = require("./nrosprimos.service");

module.exports = function nrosprimos(req, res) {
  let nroDado = req.params.nroDado;

  if (service.validateInputData(nroDado) != "") {
    return response.error(req, res, service.validateInputData(nroDado));
  } else {
    nroDado = parseInt(nroDado);
  }

  const arrayOutput = service.getPrimes(nroDado);

  return response.success(req, res, arrayOutput, 200);
};
