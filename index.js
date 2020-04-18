const express = require("express");
const axios = require("axios");
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

let assembleLink = function(lat, lon) {
  return `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${process.env.KEY}`;
};

async function getJson(url) {
  return await axios
    .get(url)
    .then((x) => {
      return x.data;
    })
   // .then((res) => console.log(res))
    .catch((error) => {
      console.error(error);
    });
}

app.get("/", (req, res) => {
  //lat "41.2876749"
  //lon "-8.079268299999999"
  let foo = undefined;
  let url = assembleLink(41.2876749, -8.079268299999999);
  getJson(url)
    .then((x) => {
      res.json(x);
    });

});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up on port ${port}.`));
