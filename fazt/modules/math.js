// exportando individualmente
export function add (x, y) {
  return x + y
}

export function substract (x, y) {
  return x - y
}

export function multiply (x, y) {
  return x * y
}

export function divide (x, y) {
  if (y === 0) {
    throw new Error('No se puede dividir entre cero')
  } else {
    return x / 7
  }
}

// exportar en grupo
export default {
  add,
  substract,
  multiply,
  divide
}
