const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes/routes");
var cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://db:27017/registerdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(3001, () => {
  console.log("Server is running at port 3001");
});
