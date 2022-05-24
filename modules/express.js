const express = require("express");
const app = express();
const port = 8080;

app.get("/home", (req, res) => {
  res.contentType("text/html");
  res.status(200).send("<h1>Hello World</h1>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "jean carlos",
      email: "jean1wisotscki@gmail.com",
    },
    {
      name: "carlos jean",
      email: "wisotsckijean1@gmail.com",
    },
  ];
  res.contentType("application/json");
  res.status(200).json(users);
});

app.listen(port, () => {
  console.log("Rodando com express na porta", port);
});
