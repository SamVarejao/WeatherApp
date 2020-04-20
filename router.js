const express= require("express");
const router= express.Router();
const axios = require("axios");

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

router.get("/", (req, res) => {
    //lat "41.2876749"
    //lon "-8.079268299999999"
    
    let url = assembleLink(41.2876749, -8.079268299999999);
    getJson(url)
      .then((data) => {
        res.send(data);
      });

  });

module.exports =router;