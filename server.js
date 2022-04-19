const express = require("express");
const connectDB = require("./config/connectDB");
const app = express();
const route = require("./routes/person");
const port = 6000;
connectDB();
app.use(express.json());
app.use("/api", route);

app.listen(port, (err) =>
  err ? console.log("error connect to server") : console.log("sucsees")
);
