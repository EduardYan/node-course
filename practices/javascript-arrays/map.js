import students from "./students.js";

// const fullnames = students.map(function (student) {
//   return `${student.name} ${student.lastname}`
// })

// const fullnames = students.map(student => {
//   return `${student.name} ${student.lastname}`
// })

// console.log(fullnames)

// const names = students.map(student => student.name + ' ' + student.lastname)
// console.log(names)

// const newStudents = students.map(student => {
//   return {
//     ...student, // <-- copy all data of student
//     title: `${student.name} - ${student.course}`,
//     fullname: `${student.name} ${student.lastname}`,
//     // course: 'programming', // <-- replace values
//   }
// })

//without return
// const newStudents = students.map(student => ({
//     ...student,
//     title: `${student.name} - ${student.course}`,
//     fullname: `${student.name} ${student.lastname}`,
// }))

// const doubleAge = newStudents.map(student => ({
//     ...student,
//     age: student.age * 2
// }))
// console.log(doubleAge)

//encadenando methods
const doubleAge = students.map(student => ({
  ...student,
  title: `${student.name} - ${student.course}`,
  fullname: `${student.name} ${student.lastname}`,
})).map(student => ({...student, age: student.age * 2}))

console.log(doubleAge)