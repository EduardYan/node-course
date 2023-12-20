// Esto solo para los modulos nativos que no tengan promesas nativas
// const fs = require('node:fs')
// const { promisify } = require('node:util')
// const readFile = promisify(fs.readFile) // <-- convertir a promesa solo cuando sea necesario, es decir que el modulo que utilicemos no tenga una version en promesa

const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo ...')
fs.readFile('./archivo.txt', 'utf-8')
  .then(text => console.log('primer texto:', text))

console.log('--> Hacer cosas mientras lee el archivo ...')

console.log('Leyendo el segundo archivo ...')
fs.readFile('./archivo2.txt', 'utf-8')
  .then(text => console.log('segundo texto:', text))
