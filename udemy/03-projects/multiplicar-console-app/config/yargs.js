const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    default: 5,
    describe: 'Es la base de la tabla multiplicar',
  })
  .option('l', {
    alias: 'list',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola'
  })
  .option('h', {
    alias: 'height',
    type: 'number',
    default: 10,
    describe: 'Limite hasta donde quieres la tabla'
  })
  .check((argv, options) => {
    if (isNaN(argv.base)) {
      throw 'La base tiene que ser un número'
    }
    return true
  })
  .argv


module.exports = argv