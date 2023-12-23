const express = require("express");

const app = express();
const port = 3000;

app.get("/products", (req, res) => {
  //validate data
  //query a database
  //process data
  return res.send("LISTA DE PRODUCTOS");
});

app.post("/products", (req, res) => {
  return res.send("CREANDO PRODUCTOS");
});

app.put("/products", (req, res) => {
  return res.send("ACTUALIZANDO PRODUCTOS");
});

app.delete("/products", (req, res) => {
  return res.send("ELIMINANDO PRODUCTOS");
});

app.patch("/products", (req, res) => {
  return res.send("ACTUALIZANDO UNA PARTE DEL PRODUCTO");
});

// app.put

app.listen(port);
console.log(`Server in port ${port}`);
