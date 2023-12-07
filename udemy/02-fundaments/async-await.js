const empleados = [
  {
    id: 1,
    name: "Ryan"
  },
  { id: 2, name: "Noe" },
  { id: 3, name: "Pablo" }
]

const salarios = [
  { id: 1, cantidad: 1000 },
  { id: 2, cantidad: 35000 },
]

const getEmpleado = (id) => {
  return new Promise((resolve, reject) => {
    const empleado = empleados.find(empleado => empleado.id === id)?.name
    empleado ? resolve(empleado) : reject(`No existe el empleado con id ${id}`)

  })
}

const getSalario = (id) => {
  return new Promise((resolve, reject) => {
    const salario = salarios.find(salario => salario.id === id)?.cantidad
    salario ? resolve(salario) : reject(`No existe el salario con id ${id}`)
  })
}

const id = 0

//async lo que hace es transformar nuestra funcion para que retorne una promesa
const getInfoUser = async (id) => {
  try {
    const empleado = await getEmpleado(id)
    const salario = await getSalario(id)

    return `El empleado ${empleado} tiene de salario ${salario}`

  } catch (err) {
    // return err
    throw err
  }
}

getInfoUser(id)
  .then(msg => {
    console.log('TODO BIEN')
    console.log(msg)
  })
  .catch(err => {
    console.log('TODO MAL')
    console.log(err)
  })
