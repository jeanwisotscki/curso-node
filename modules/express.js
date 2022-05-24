const express = require("express");
const UserModel = require("../src/models/user.model");
const port = 8080;

const app = express();
app.use(express.json());

// endpoints

// buscar usuários
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});

    res.status(200).json(users);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// buscar usuário por id
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);

    res.status(200).json(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// criar usuário
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(201).json(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// editar usuário
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// delete usuário
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndRemove(id);

    res.status(200).json(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.listen(port, () => {
  console.log("Rodando com express na porta", port);
});
