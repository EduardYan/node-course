const inquirer = require('inquirer')
require('colors')

const questions = [
  {
    type: 'list',
    name: 'option',
    message: 'What do you want to do ?',
    choices: [
      {
        value: '1',
        name: '1. Create task'
      },
      {
        value: '2',
        name: '2. List tasks'
      },
      {
        value: '3',
        name: '3. List tasks completed'
      },
      {
        value: '4',
        name: '4. List tasks pending'
      },
      {
        value: '5',
        name: '5. Completed task(s)'
      },
      {
        value: '6',
        name: '6. Delete task'
      },
      {
        value: '0',
        name: '0. Exit'
      }
    ]
  }
]

const inquirerMenu = async () => {
  console.clear()
  console.log('==================='.green)
  console.log(' Select a option:'.green)
  console.log('===================\n'.green)

  const { option } = await inquirer.prompt(questions)
  return option
}

module.exports = { inquirerMenu }
