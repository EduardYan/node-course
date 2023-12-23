const express = require("express");

const port = 3000;
const app = express();

//funciona con todos los metodos
app.all("/info", (req, res) => {
  res.send("server info");
});

app.listen(port);
console.log(`Server in port ${port}`);
