const express = require("express");

const port = 3000;
const app = express();

// app.get("/hello/dan", (req, res) => {
//   res.send("Hello")
// })

app.get("/hello/:user", (req, res) => {
  // console.log(req.params)
  // console.log(typeof req.params.user)

  console.log(req.query.user);
  res.send(`Hello ${req.params.user}`);
});

app.get("/add/:x/:y", (req, res) => {
  // destructuring
  const { x, y } = req.params;
  // verbose form
  // const result = parseInt(req.params.x) + parseInt(req.params.y);
  const result = parseInt(x) + parseInt(y);
  console.log(result);
  res.send(`Result: ${result}`);
});

// app.get("/add/:x/:y", ({params: {x,y}}, res) => {
//   const result = parseInt(x) + parseInt(y)
//   console.log(result);
//   res.send(`Result: ${result}`);
// });

app.get("/users/:username/photo", (req, res) => {
  console.log(req.params);
  if (req.params.username === "dan") {
    //return for cancel the function and not send Usuario no tiene accesso
    return res.sendFile("./image.PNG", { root: __dirname });
  }
  res.send("Usuario no tiene acceso");
});

app.get("/name/:nombre/age/:age", (req, res) => {
  console.log(req.params);

  res.send(`El ususario ${req.params.nombre} tiene ${req.params.age} años`);
});

app.get("/search", (req, res) => {
  // http://localhost:3000/search?user=dan&user=test&user=angelica
  console.log(req.query);
  if (req.query.q === "javascript books") {
    res.send("lista de libros javascript");
  } else {
    res.send("Pagina normal");
  }
});

app.listen(port);
console.log(`Server in port ${port}`);
