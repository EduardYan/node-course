require('colors')

const { inquirerMenu } = require('./helpers/inquirer')

console.clear()

const main = async () => {
  let opt = ''
  while (opt !== '0') {
    opt = await inquirerMenu()
    console.log({ opt })

    // if (opt !== '0') await pause()
  }
}

main()
