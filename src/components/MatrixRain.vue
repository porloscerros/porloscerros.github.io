<template>
  <canvas id="matrix_rain"></canvas>
</template>

<script>
// Parameters
const fontSize = 12;
const spdMult = 0.5;
const fadeSpd = 0.03;
const headColor = '#FFFFFF';
const tailColor = '#00FF00';

export default {
  name: "MatrixRain",
  data() {
    return {
      canvas: null,
      ctx: null,
      pos: null, spd: null, time: null, chars: null,
    }
  },
  methods: {
    init() {
      this.pos = []; this.spd = []; this.time = []; this.chars = [];
      this.ctx.font = fontSize + 'pt Consolas';
      for (let i = 0; i < this.canvas.width / fontSize; i++) {
        this.pos[i] = Math.random() * (this.canvas.height / fontSize);
        this.spd[i] = (Math.random() + 0.2) * spdMult;
        this.time[i] = 0;
        this.chars[i] = ' ';
      }
    },
    render() {
      requestAnimationFrame(this.render);

      this.ctx.fillStyle = tailColor;
      for (let i = 0; i < this.chars.length; ++i) { // Tails
        this.ctx.fillText(this.chars[i], i * fontSize + 1, this.pos[i] * fontSize);
      }
      this.ctx.fillStyle = `rgba(0, 0, 0, ${fadeSpd})`;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height); // Fading

      this.ctx.fillStyle = headColor;
      for (let x = 0; x < this.pos.length; ++x){ // Chars
        if (this.time[x] > 1) {
          let charCode = (Math.random() < 0.9) ? Math.random() * 93 + 33
              : Math.random() * 15 + 12688;
          this.chars[x] = String.fromCharCode(charCode);
          this.ctx.fillText(this.chars[x], x * fontSize + 1, this.pos[x] * fontSize + fontSize);
          this.pos[x]++;
          if (this.pos[x] * fontSize > this.canvas.height) this.pos[x] = 0;
          this.time[x] = 0;
        }
        this.time[x] += this.spd[x];
      }
    },
  },
  mounted() {
    let canvas = document.getElementById("matrix_rain");
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.init();
    this.render();
  },
}
</script>

<style scoped>
body, html {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: #000;
}
</style>