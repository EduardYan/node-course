const colors = require("colors")

const showMessage = (base) => {
  console.log('==========================='.green)
  console.log('   Tabla del: '.green, colors.blue(base))
  console.log('==========================='.green)
}

module.exports = showMessage