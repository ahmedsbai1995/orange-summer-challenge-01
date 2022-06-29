const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const app = express();

//Import Routes
const itemsRoute = require("./routes/item");
const userRoute = require("./routes/user");

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use("/items", itemsRoute);
app.use("/users", userRoute);

//Routes
app.get("/", (req, res) => {
  res.send("we are on home");
});

//Connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("connect to DB ");
});

//Start listenning
app.listen(5000);
