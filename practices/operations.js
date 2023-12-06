function makeOperation(nameOperation, values) {
  let result = 0;

  if (nameOperation === "+") {
    result = values[0] + values[1];
  } else if (nameOperation === "-") {
    result = values[0] - values[1];
  } else if (nameOperation === "*") {
    result = values[0] * values[1];
  } else if (nameOperation === "/") {
    if (values[1] === 0) {
      result = "!! No se puede dividir entre 0 puebra otro valor.";
    } else {
      result = values[0] / values[1];
    }
  }

  return result;
}

const values = [25, 0];

const r = makeOperation("/", values);
console.log(r);
