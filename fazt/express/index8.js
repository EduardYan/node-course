const express = require("express");

const port = 3000;
const app = express();

app.use((req, res, next) => {
  console.log(`Route: ${req.url} Method: ${req.method}`);
  next();
});

//this routes can be visited because these routes are before of the middleware
app.get("/profile", (req, res) => {
  res.send("Profile Page");
});

app.all("/about", (req, res) => {
  res.send("About Page");
});

app.use((req, res, next) => {
  if (req.query.login === "dan@danweb.com") {
    next(); //validating if the data is correct
  } else {
    res.send("No autorizado");
  }
});

app.get("/dashboard", (req, res) => {
  res.send("Dashboard Page");
});

app.listen(port);
console.log(`Server in port ${port}`);
