import students from './students.js'

// const result = students.every(student => student.age === 20)
// const result = students.every(student => student.age !== 20)

const result = students.every(student => student.name.includes('J'))
console.log(result)
