// const os = require('os') // ❌ esta forma ya no es recomendada
const os = require('node:os') // ✅ esta forma es la recomendada

console.clear()
console.log('Información del sistema operativo:')
console.log('----------------------------------')
console.log('Nombre del sistema operativo: ', os.platform())
console.log('Versión del sistema operativo: ', os.version())
console.log('Arch del sistema operativo: ', os.arch())
console.log('CPUs del sistema operativo: ', os.cpus())
console.log('Memoria libre: ', os.freemem() / 1024 / 1024)
console.log('Memoria total: ', os.totalmem() / 1024 / 1024)
console.log('Uptime: ', os.uptime() / 60 / 60)
