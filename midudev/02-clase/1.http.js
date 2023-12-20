const http = require('node:http') // protocolo HTTP
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (req.url === '/') {
    res.statusCode = 200 // Ok
    // res.setHeader('Charset', 'utf-8')
    // res.setHeader('Content-Type', 'text/plain') // 'text/html' 'application/json'

    // res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    // res.end('<h1>Bienvenido a mi página de inicio</h1>')

    res.end('<h1>Bienvenido a mi página de inicio</h1>')
  } else if (req.url === '/image.png') {
    fs.readFile('./image.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.send('<h1>500 Internal Server Error</h1>')
      } else {
        res.statusCode = 200
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h1>Contacto</h1>')
  } else {
    res.statusCode = 404 // Not found
    res.end('<h1>404</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`server listening in port http://localhost:${desiredPort}`)
})
