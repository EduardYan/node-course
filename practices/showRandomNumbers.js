const generateNumber = () => {
  const numbers = []
  return new Promise((resolve) => {
    for (let i = 0; i < 30; i++) {
      numbers.push(Math.random())
    }
    resolve(numbers)
  })
}

generateNumber()
  .then(numbers => {
    const results = numbers.map((n, index) => n * 10000000)
    results.forEach(r => console.log(`Result - ${r}`))
  })
