import students from './students.js'

// solo retorna un valor booleano si tan solo uno de los elementos cumplen la condicion
// const result = students.some(function (student) {
//   if(student.age > 24 ) {
//     return true
//   }
// })

// const result = students.some(student => student.age > 24)
const result = students.some(student => student.lastname === 'Perez')

console.log(result)
