// ✅ ES MODULES

// const math = require("./modules/math")
import math, { add, substract, divide, multiply } from './modules/math.js'

console.log('USING EXPORT DEFAULT')
console.log(math.divide(45, 5))
console.log(math.add(45, 5))
console.log(math.multiply(45, 5))
console.log(math.substract(45, 5))
console.log()

console.log('USING {}')
console.log(divide(4, 2))
console.log(add(100, 2500))
console.log(multiply(167, 4))
console.log(substract(100, 5))
