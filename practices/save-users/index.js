import data from './data.js'
import { writeFile } from 'node:fs/promises'

const joinData = (name, age) => {
  const firstLetter = name.split('')[0]
  return {
    name: name.replace(firstLetter, firstLetter.toUpperCase()),
    age
  }
}

const saveNames = (names) => {
  const fileToSave = './names.json'
  return new Promise((resolve, reject) => {
    writeFile(fileToSave, JSON.stringify(names, null, 2))
      .then(() => resolve(`Archivo "${fileToSave}" guardado`))
      .catch((e) => reject(e))
  })
}

const newNames = { users: data.names.map((n, index) => joinData(n, data.ages[index])) }

try {
  const msg = await saveNames(newNames)
  console.log(msg)
} catch (e) {
  console.log(e)
}
