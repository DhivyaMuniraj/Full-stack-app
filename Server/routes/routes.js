const express = require("express");
const userModel = require("../models/models");
const adminModel = require("../models/model2");
const app = express();

app.post("/add_user", async (request, response) => {
  const user = new userModel(request.body);
  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/users", async (request, response) => {
  const users = await userModel.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/user/:name", async (request, response) => {
  const userName = await userModel.find({ name: request.params.name });

  try {
    response.send(userName);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/user1/:emp_id", async (request, response) => {
  const userId = await userModel.find({ emp_id: request.params.emp_id });

  try {
    response.send(userId);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/new_admin", (req, res) => {
  const admin1 = new adminModel(req.body);
  try {
    admin1.save();
    res.send(admin1);
  } catch (err) {
    res.status(500).send(error);
  }
});
app.get("/admin/:names", async (req, res) => {
  const admin = await adminModel.find({ admin_name: req.params.names });
  try {
    res.send(admin);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.patch("/user_update", (req, res) => {
  const admin2 = userModel
    .updateOne(req.body.exis, req.body.upd)
    .then((admin2) => res.status(200).json(admin2));
});

module.exports = app;
