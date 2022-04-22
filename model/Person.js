const mongoose = require("mongoose");
const newperson = new mongoose.Schema({
  name: {
    type: String,
  },

  email: {
    type: String,
  },
  age: {
    type: Number,
  },
});
module.exports = mongoose.model("Person", newperson);
