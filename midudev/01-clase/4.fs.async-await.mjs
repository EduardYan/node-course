import fs from 'node:fs/promises' // <-- utilizando ES modules

// no se puede utilizar en CommonJs await asi por asi, sino que debe
// estar dentro de una funcion con async, en cambio con ES modules si
console.log('Leyendo el primer archivo ...')
const text = await fs.readFile('./archivo.txt', 'utf-8')
console.log('primer texto:', text)

console.log('--> Hacer cosas mientras lee el archivo ...')

console.log('Leyendo el segundo archivo ...')
const secondText = await fs.readFile('./archivo2.txt', 'utf-8')
console.log('segundo texto:', secondText)
