<template>
  <div id="app" class="container">
    <div class="icon-cont"><img :src="icon" /></div>

    <div>
      <table>
        <tr>
          <th><h1>Weather</h1></th>
          <th><h1>Location</h1></th>
          <th><h1>Temp °C</h1></th>
          <th><h1>Date/Time</h1></th>
        </tr>
        <tr>
          <td>
            <p>{{ message.weather.description }}</p>
          </td>
          <td>
            <p>{{ message.temp }}</p>
          </td>
          <td>
            <p>{{ message.city_name }} {{ message.country_code }}</p>
          </td>
          <td>
            <p>{{ message.datetime }}</p>
          </td>
        </tr>
      </table>
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
html {
  height: 100%;
}
html > body {
  background-image: url("./assets/background.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100%;
  overflow: hidden;
  text-align: center;
}
.container {
  position: relative;
  top: 150px;
  display: inline-grid;
  grid-template-columns: 1fr 600px;
  grid-gap: 20px;
  padding: 10px;
  background: rgb(0, 0, 0);
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.785049053801208) 50%,
    rgba(0, 0, 0, 0.6337885495995272) 60%,
    rgba(0, 0, 0, 0) 90%
  );
}
.container > div {
  text-align: center;
  display: inline;
}
.container > div > table {
  width: 100%;
}
p {
  color: white;
  font-family: 'Open Sans';
}
h1 {
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
