const saveTable = require('./helpers/save')
const argv = require('./config/yargs')

require("colors")

console.clear()

// console.log(argv)
// const [, , arg3 = '--base=5'] = process.argv
// const [, base] = arg3.split('=')

saveTable(argv.base, argv.list, argv.height)
  .then(fileName => console.log(`Archivo ${fileName.rainbow} creado`))
  .catch(err => console.log(err))