const items = [
  {
    question: 'Where are you from ?',
    answer: "I'm from San Pablo Tacachico"
  },
  {
    question: 'Do you prefer pizza or hamburgers ?',
    answer: 'I prefer pizza'
  },
  {
    question: "How it's going ?",
    answer: 'Oh, well'
  }
]

items.forEach(item => {
  console.table({ item })
})
