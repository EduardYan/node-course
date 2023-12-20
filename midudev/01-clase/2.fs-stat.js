const fs = require('node:fs')

// esto es sincrono
const stat = fs.statSync('./archivo.txt')

console.log(
  stat.isFile(),
  stat.isDirectory(),
  stat.isSymbolicLink(),
  stat.size
)
