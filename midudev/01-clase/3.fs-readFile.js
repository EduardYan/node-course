const fs = require('node:fs')

/* SYNC ☑️
console.log('Leyendo el primer archivo ...')
const text = fs.readFileSync('./archivo.txt', 'utf-8')

console.log(text)

console.log('Hacer cosas mientras lee el archivo ...')

console.log('Leyendo el segundo archivo ...')
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log(secondText)
*/

// ASYNC ☑️
console.log('Leyendo el primer archivo ...')
fs.readFile('./archivo.txt', 'utf-8', (err, data) => { // <-- basicamente le decimos que no espere a que termine esta tarea para que siga realizando otras tareas
  if (err) { console.error(err) }

  console.log('primer texto:', data)
})

console.log('--> Hacer cosas mientras lee el archivo ...')

console.log('Leyendo el segundo archivo ...')
fs.readFile('./archivo2.txt', 'utf-8', (err, data) => {
  if (err) { console.error(err) }

  console.log('segundo texto:', data)
})
