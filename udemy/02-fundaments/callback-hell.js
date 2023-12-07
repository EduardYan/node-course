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

const getEmpleado = (id, callback) => {
  const empleado = empleados.find(empleado => empleado.id === id)?.name

  if (empleado) {
    callback(null, empleado)
  } else {
    callback(`El empleado con ${id} no existe`)
  }
}


const getSalario = (id, callback) => {
  const salario = salarios.find(salario => salario.id === id)?.cantidad

  if (salario) {
    callback(null, salario)
  } else {
    callback(`El empleado con ${id} no existe`)
  }

}

const id = 3

getEmpleado(id, (err, empleado) => {
  if (err) {
    return console.log(err)
  } else {
    getSalario(id, (err, salario) => {
      if (err) {
        return console.log(err)
      } else {
        return console.log(`El empleado ${empleado} tiene un salario de ${salario}`)
      }
    })
  }
})
