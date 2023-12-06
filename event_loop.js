// console.log("first");

// setTimeout(() => {
//   console.log("second");
// }, 3000);
// console.log("third");


// console.log('first')

// setTimeout(() => { 
//   console.log("second"); // <-- a pesar que hemos definido el tiempo de 0 segundos NODE delega esta tarea porque sabe que se ejecutara y pasa a la siguiente
// }, 0);
// console.log('third')


const http = require("http")

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to the server")
    return res.end()
  }

  if (req.url === "/about") {
    // task block code
    // for(let i = 0; i < 1000; i++) {
    //   console.log(Math.random() * i)
    // }

    return res.end("About page")
  }

  res.end("Not found")

})

server.listen(3000)
console.log("Server in port 3000")