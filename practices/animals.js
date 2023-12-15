const getAnimals = (cant = 10) => {
  const animals = [
    'Cat',
    'Lion',
    'Lamb',
    'Sheap',
    'Whale',
    'Rabbit',
    'Panter',
    'Spider',
    'Owl',
    'Cow',
    'Horse',
    'Monkey',
    'Fish',
    'Donkey',
    'Bull',
    'Crocodile',
    'Zebra',
    'Bear',
    'Deer',
    'Eagle',
    'Bird',
    'Duck',
    'Goat',
    'Shark',
    'Mouse',
    'Hen',
    'Goose',
    'Dog',
    'Dolphin',
    'Octupus'
  ]

  const animalsToReturn = []

  return new Promise(resolve => {
    if (cant > animals.length) {
      resolve(animalsToReturn)
    } else {
      for (let i = 0; i < cant; i++) {
        animalsToReturn.push(animals[i])
      }

      resolve(animalsToReturn)
    }
  })
}

getAnimals(17).then(animals => console.log(animals))
