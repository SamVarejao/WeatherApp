<template>
  <div id="app">
    <h1>x</h1>
  </div>
</template>

<script>
import weatherData from "./weatherData";
require("dotenv").config();

export default {
  name: "App",
  created() {
    weatherData
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
      .then((data) => console.log(data))
      .catch((err) => {
        console.error(err.message);
      });
  },
};
</script>

<!-- Comment  <template>
  <div id="app">
    <HelloWorld msg="placeholder"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
-->
