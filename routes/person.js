const express = require("express");
const res = require("express/lib/response");
const route = express.Router();
const Person = require("../model/Person");
route.post("/addperson", async (req, res) => {
  const user = req.body;
  try {
    const person = new Person(user);
    await person.save();
    res.status(200).send({ person });
  } catch (error) {
    console.log(error);
  }
});
route.get("/getperson", async (req, res) => {
  try {
    const person = await Person.find();
    res.status(200).send({ person });
  } catch (error) {
    console.log(error);
  }
});
route.put("/editperson/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, Email } = req.body;
    const person = await Person.findByIdAndUpdate(id, {
      $set: { name, age, Email },
    });
    res.status(200).send({ person });
  } catch (error) {
    console.log(error);
  }
});
route.delete("/deleteperson/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const person = await Person.findByIdAndDelete(id);
    res.status.send("deleted");
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
