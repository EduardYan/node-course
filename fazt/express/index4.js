const express = require("express");

const port = 3000;
const app = express();

//methods for read texts jsons and more data type
app.use(express.text());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("Nuevo usuario creado");
});

app.listen(port);
console.log(`Server in port ${port}`);
