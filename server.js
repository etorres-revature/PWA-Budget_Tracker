const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

require("dotenv").config();

const PORT = process.env.PORT || 18672;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`AApp is active at http://localhost:${PORT}!`);
});
