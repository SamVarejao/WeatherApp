<template>
  <div id="Weather">
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import weatherData from "../weatherData";
export default {
  name: "WeatherComp",
  data() {
    return {
      msg: "hi",
    };
  },

  created() {
    weatherData.getLocation();
  },
};
</script>
