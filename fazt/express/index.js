const express = require("express");

const app = express();
const port = 3000;

//routes
app.get("/", (req, res) => {
  res.send("WELCOME");
});

app.get("/about", (req, res) => {
  res.send("ABOUT");
});

app.get("/weather", (req, res) => {
  res.send("The weather is bad");
});

//use sirve para cuando visitemos una url que no exista
app.use((req, res) => {
  // res.send("This page not exist");
  res.status(404).send("This page not exist");
});

app.listen(port);
console.log(`SERVER IN PORT ${port}`);
