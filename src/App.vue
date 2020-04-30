<template>
  <div id="app" class="container">
    <div class="icon-cont"><img :src="icon" /></div>
    <div class="header-cont">
      <h1>Weather</h1>
      <h1>Temp °C</h1>
      <h1>Location</h1>
      <h1>Date/Time</h1>
    </div>

    <div class="info-cont">
      <p>{{ message.city_name }}</p>
      <p>{{ message.country_code }}</p>
      <p>{{ message.weather.description }}</p>
      <p>{{ message.datetime }}</p>
      <p>{{ message.temp }}</p>
    </div>
  </div>
</template>

<script>
import weatherData from "./weatherData";
require("dotenv").config();

export default {
  name: "App",
  data() {
    return {
      message: "loading...",
      icon: "",
    };
  },
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
      .then((data) => {
        this.message = data;
      //  let x = "./assets/icons/";

        this.icon = require("./assets/icons/" + data.weather.icon + ".png");
      })
      .catch((err) => {
        console.error(err.message);
      });
    console.log(x);
  },
};
</script>
<style>
p {
  display: inline;
  margin: 0px 10px;
}
h1 {
  display: inline;
  margin: 0px 10px;
}
.container {
  display: grid;
  padding: 0px;
  margin: 0px;
}
.header-cont {
  margin: 0px;
  background-color: red;
}
.info-cont {
  background-color: blue;
}
.icon-cont {
  background-color: yellow;
}
</style>
