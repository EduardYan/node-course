const express = require("express");

const port = 3000;
const app = express();

//midelware todo pasara por esta ruta
app.use((req, res, next) => {
  // console.log("paso por aki");
  console.log(`Route: ${req.url} Method: ${req.method}`)
  next();
});

app.get("/profile", (req, res) => {
  res.send("profile page");
});

app.all("/about", (req, res) => {
  res.send("about page");
});

app.listen(port);
console.log(`Server in port ${port}`);
