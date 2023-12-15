function showPerson ({ name = 'unknow', age, id }) {
  console.log(
    `
    The name is ${name}
    The Age is ${age}
    The id is ${id}
    `
  )
}

const person = { name: 'Daniel', age: 17, id: 34567 }
const person2 = { age: 18, id: 123456 }
// const new_person = {
//   ...person,
//   cellphone: 67881,
// }
// console.log(new_person)

showPerson({ ...person })
showPerson(person2)
