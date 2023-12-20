const http = require('node:http')
const { findAvailablePort } = require('./10.free-port')

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hola mundo')
})

// server.listen(1234, () => {
//   console.log('Server listening in port 1234')
// })

const desiredPort = process.env.PORT ?? 3000
findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`Server listening in port http://localhost:${port}`)
  })
})

// con el puerto 0 lo que hará es buscar el primer puerto
// que se encuentrre vació. Pero en production esto no es recomendable
// server.listen(0, () => {
//   console.log(`Server listening in port http://localhost:${server.address().port}`)
// })
