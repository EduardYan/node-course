import students from './students.js'


// const developers = []
// for(let i = 0; i < students.length; i++) {
//   if(students[i].course === 'Web Development') {
//     developers.push(students[i])
//   }
// }
// console.log(developers)

//retorna todos los que cumplieron una condicion
// const result = students.filter(function (student) {
//   if (student.course === 'Web Development') {
//     return true // <-- indica que si la cumple
//   }
// })

// const result = students.filter(student => student.course !== 'Web Development')
const result = students.filter(student => student.age >= 20)
console.log(result)