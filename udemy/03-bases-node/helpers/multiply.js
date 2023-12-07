require("colors")

const multiplyFor = (base, number) => {
  return `${base} x ${number} = ${base * number}\n`
}

const makeWithColors = (base, number) => {
  return `${base} ${'x'.green} ${number} ${'='.green} ${base * number}\n`
}

module.exports = {
  multiplyFor,
  makeWithColors
}