function getPrimes(number) {
  let primo = true;
  let arrayPrimos = [2];

  for (let dividendo = number; dividendo > 2; dividendo--) {
    for (let divisor = 2; divisor < dividendo; divisor++) {
      if (dividendo % divisor === 0) {
        primo = !primo;
        break;
      }
    }

    if (primo) {
      arrayPrimos.push(dividendo);
    }
    primo = true;
  }
  return descendingArray(arrayPrimos);
}

function descendingArray(arrayPrimes) {
  return arrayPrimes.sort(function (a, b) {
    return b - a;
  });
}

function validateInputData(data) {
  let output = "";

  if (!data) {
    output = "El parametro debe ser un numero positivo mayor a 2.";

  } else if (!Number.isInteger(parseInt(data))) {
    output = "Solo se acepta de parametro un numero positivo mayor a 2.";

  } else if (Number.isInteger(parseInt(data)) && parseInt(data) <= 2) {
    output = "Debes ingresar como parametro un numero positivo mayor a 2.";
  }

  return output;
}

module.exports = { getPrimes, validateInputData };
