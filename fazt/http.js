// ✅ HTTP SERVER

const http = require('http')

// const port = 3000;

// http.createServer(function (request, response) {
//   response.write("Hello world");
//   response.end();
// }).listen(3000);

const server = http.createServer((request, response) => {
  // console.log(request);
  console.log(request.url)

  if (request.url === '/') {
    response.write('Welcom to server')
    return response.end()
  }

  if (request.url === '/about') {
    response.write('Acerca de')
    return response.end()
  }

  response.write(`
      <h1>Not found</h1>
      <p>Esta pagina no se encontro</p>
      <a href="/">Volver a la pagina principal</a>
    `)
  response.end()
})

server.listen(3000)
console.log('Server listening in port 3000')
