const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
/*
async function getPosition() {
  return await navigator.geolocation.getCurrentPosition;
}
*/
// arg.coords.latitude +
// arg.coords.longitude +

const routes= require("./router");
app.use("/", routes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up on port ${port}.`));
