// process
// argumentos de entrada
// console.log(process.argv)

// controlar el proceso y su salida
// process.exit(0) // ✅ con 0 esque todo salio bien
// process.exit(1) // ✅ con 1 esque algo fallo o salio mal

// podemos controlar eventos del proceso
// process.on('exit', () => // limpear los recursos)

// currento working directory
console.log(process.cwd())

// platform y más ...
console.log(process.platform)

console.log(process.env.NODE_ENV)
