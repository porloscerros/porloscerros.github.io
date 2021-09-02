<template>
  <canvas id="matrix_rain"></canvas>
</template>

<script>
// Parameters
const fontSize = 12;
const spdMult = 0.5;
const fadeSpd = 0.01;
const headColor = '#FFFFFF';
const tailColor = '#00FF00';
// const messageColor = '#FF0000';

export default {
  name: "MatrixRain",
  data() {
    return {
      canvas: null,
      ctx: null,
      pos: null,
      spd: null,
      time: null,
      chars: null,
      message: "THIS SITE IS UNDER DEVELOPMENT",
      messages: [
        "THIS SITE IS UNDER DEVELOPMENT",
        "I Have Dreamed A Dream, But Now That Dream Is Gone From Me."
      ],
      messageStartPos: 22,
      messagePos: [],
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
      this.generateTail();
      this.ctx.fillStyle = `rgba(0, 0, 0, ${fadeSpd})`;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height); // Fading
      this.generateHead();
    },
    generateTail() {
      this.ctx.fillStyle = tailColor;
      for (let i = 0; i < this.chars.length; ++i) { // Tails
        this.renderMessage(i);
        this.ctx.fillText(this.chars[i], i * fontSize + 1, this.pos[i] * fontSize);
      }
    },
    generateHead() {
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
    renderMessage(i) {
      // for (let j = 0; j < this.messages.length; j++) {
      //   this.setMessageStartPositions();
        if (this.pos[i] === this.messageStartPos) {
          let message = this.message
          let messageLength = message.length+this.messageStartPos
          let rowLength = this.canvas.width/fontSize
          if (messageLength > rowLength) {
            message = message.slice(0, message.length-(messageLength-rowLength));
          }
          if (i >= this.messageStartPos && i <= message.length+this.messageStartPos) {
            this.spd[i] = 0.002
            this.chars[i] = message.charAt(i-this.messageStartPos);
          }
        } else {
          this.spd[i] = (Math.random() + 0.2) * spdMult;
        }
      // }
    },
    setMessageStartPositions() {
      // this.messageStartPos = this.randomIntFromInterval(1, (this.pos.length-this.message.length))
      this.messageStartPos = this.randomIntFromInterval(1, (this.pos.length/2))
      if (this.messageStartPos < 1) {
        this.messageStartPos = 1;
      }
    },
    randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    },

  },
  mounted() {
    let canvas = document.getElementById("matrix_rain");
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    window.onresize = () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.init();
      this.setMessageStartPositions();
    };
    window.addEventListener('click', () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.init();
      this.setMessageStartPositions();
    });
    this.init();
    this.setMessageStartPositions();
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