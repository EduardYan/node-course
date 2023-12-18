import { writeFile } from 'node:fs/promises'

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const choiceRandomLetter = () => {
  const randomIndex = parseInt(Math.random() * 10)
  return letters[randomIndex]
}

const generateRandomName = (length) => {
  let name = ''
  for (let i = 0; i < length; i++) {
    name += choiceRandomLetter()
  }
  return name + '\n'
}

for (let i = 0; i < 100; i++) {
  const nameGenerated = generateRandomName(10)
  writeFile('./names.txt', nameGenerated, { flag: 'a' })
    .catch(e => console.error(e))
}
