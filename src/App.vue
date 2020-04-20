<template>
  <div id="app">
    <WeatherComp />
  </div>
</template>

<script>
import WeatherComp from "./components/WeatherComp.vue";
export default {
  name: "App",
  components: {
    WeatherComp,
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
