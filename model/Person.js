const mongoose = require("mongoose");
const newperson = new mongoose.Schema({
  name: {
    type: String,
  },

  age: {
    type: Number,
  },
  Email: {
    type: String,
  },
});
module.exports = mongoose.model("Person", newperson);
