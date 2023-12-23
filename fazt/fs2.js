import { appendFile } from 'fs/promises'

const names = [
  {
    value: 'Wilson'
  },
  {
    value: 'Karla'
  },
  {
    value: 'Jonh'
  },
  {
    value: 'Nest'
  },
  {
    value: 'Pablo'
  }
]

// saving names in file
for (let i = 0; i < names.length; i++) {
  try {
    // const nameValue = (i+1) + names[i].value + "\n";
    const nameValue = `${i + 1} ${names[i].value + '\n'}`
    await appendFile('./data/namesForLoop.txt', nameValue)
  } catch (err) {
    console.log(err)
  }
}
