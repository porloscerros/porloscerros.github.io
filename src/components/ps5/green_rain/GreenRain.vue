<template>
  <div class="h-full w-full bg-gray-900" id="container"></div>
</template>

<script>

export default {
  name: "GreenRain",
  data() {
    return {
      message: "hola green rain"
    }
  },
  methods: {

  },
  mounted() {
    let radar = require('./GreenRain.js')
    const P5 = require('p5')
    new P5(radar.main)
  },
}
</script>

<style scoped>

</style>