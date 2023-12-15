// import students from './students.js'

// let total = 0
// for (let i = 0; i < students.length; i++) {
//   total += students[i].age;
// }
// console.log(total)

// recibe el objeto actual y un acumulador
// const result = students.reduce((total, student) => {
//   return total + student.age
// }, 0) // <-- valor inicial del acumulador
// console.log(result)

// const result = students.reduce((total, student) => total + student.age, 0)
// console.log(result)

const developers = [
  {
    id: 1,
    name: 'John',
    skills: ['HTML', 'React', 'Javascript', 'Java', 'NodeJS']
  },
  {
    id: 2,
    name: 'Oscar',
    skills: ['HTML', 'Vue', 'Javascript', 'C++']
  },
  {
    id: 3,
    name: 'Pablo',
    skills: ['Rust', 'React', 'Python', 'CSS', 'NodeJS']
  }
]

const result = developers.reduce(function (allSkills, student) {
  return Array.from(new Set([...allSkills, ...student.skills]))
}, [])

console.log(result)
