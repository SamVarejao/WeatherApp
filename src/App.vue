<template>
  <div id="app">
    <h1>{{message}}</h1>
  </div>
</template>

<script>
import weatherData from "./weatherData";
require("dotenv").config();

export default {
  name: "App",
  data() {return {
    message:null
  }},
  created() {
    let x = weatherData
      .getPosition()
      .then((position) => {
        return weatherData.assembleLink(
          position.latitude,
          position.longitude,
          process.env.VUE_APP_KEY
        );
      })
      .then((url) => {
        return weatherData.getJson(url);
      })
      .then((data) => this.message= data)
      .catch((err) => {
        console.error(err.message);
      });
    console.log(x);
  },
};
</script>
