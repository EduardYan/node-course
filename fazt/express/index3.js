const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/myFile", (req, res) => {
  //any file type
  res.sendFile("./image.PNG", {
    root: __dirname,
  });
});

app.get("/user", (req, res) => {
  res.json({
    name: "Oscar",
    age: 14,
    lastname: "Ryan",
    points: [1, 2, 3],
    address: "https://test.com",
    // hello: function() {
    // }
  });
});

app.get("/isAlive", (req, res) => {
  //200 todo fue bien pero envia contenido
  //204 todo fue bien pero no envia nada no es necesario
  res.sendStatus(204)
})

app.listen(port);
console.log(`Server in port ${port}`);
