import students from "./students.js";

// const result = students.find((student) => {
//   //obteniendo los estudiantes que conicidan con el nombre Ray
//   if(student.name === 'Jack') {
//     return true
//   }
// })

const result = students.find(student => student.name === 'Jack')

console.log(result)