<template>
  <div id="app">
    <div class="icon-cont">
      <img v-bind:src="icon" />
    </div>
    <div class="info-cont">
      <h3>{{ message.city_name }}</h3>
      <h3>{{ message.country_code }}</h3>
      <h3>{{ message.description }}</h3>
      <h3>{{ message.datetime }}</h3>
      <h3>{{ message.temp }}</h3>
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
      icon: require("./assets/icons/a01d.png"),
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
      .then(
        (data) => (
          (this.message = data),
          (this.icon = require("./assets/icons/" + data.icon))
        )
      )
      .catch((err) => {
        console.error(err.message);
      });
    console.log(x);
  },
};
</script>
