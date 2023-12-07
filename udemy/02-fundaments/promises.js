const empleados = [
  {
    id: 1,
    name: "Ryan"
  },
  { id: 2, name: "Noe" }, { id: 3, name: "Pablo" }
]

const salarios = [
  { id: 1, cantidad: 1000 },
  { id: 2, cantidad: 35000 },
]


const getEmpleado = (id) => {

  return new Promise((resolve, reject) => {
    const empleado = empleados.find(empleado => empleado.id === id)?.name
    // if (empleado) {
    //   resolve(empleado)
    // } else {
    //   reject(`No existe el empleado con id ${id}`)
    // }

    // using ternary
    empleado ? resolve(empleado) : reject(`No existe el empleado con id ${id}`)

  })
}

const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find(salario => salario.id === id)?.cantidad
    salario ? resolve(salario) : reject(`No existe el salario con id ${id}`)
  })
}


// getEmpleado(id)
//   .then(empleado => console.log(empleado))
//   .catch(err => console.log(err))

// getSalario(id)
//   .then(salario => console.log(salario))
//   .catch(err => console.log(err))

// getEmpleado(id)
//   .then(empleado => {
//     getSalario(id)
//       .then(salario => console.log(`El empleado ${empleado} tiene un salario ${salario}`))
//       .catch(err => console.log(err))
//   })
//   .catch(err => console.log(err))

const id = 2

let name

getEmpleado(1)
  .then(empleado => {
    name = empleado
    return getSalario(id)
  })
  .then(salario => console.log(`El empleado ${name} tiene un salario de ${salario}`))
  .catch(err => console.log(err))