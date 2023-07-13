<template>
  <div ref="container" class="container h-full w-full">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: "HtmlRain",
  data() {
    return {
      canvas: null,
      height: 500,
      width: 500,
      ctx: null,
      code: ["<html>", "<p>", "<b>", "<strong>", "<head>", "<body>", "<a>", "<i>", "<div>", "<form>", "<ol>", "<li>", "<ul>", "<pre>", "<nav>", "<footer>", "<header>", "<article>", "<section>", "<em>", "<style>", "<title>", "<meta>", "<br>", "<table>"],
      things: [],
      THINGCOUNT: 190,
    }
  },
  methods: {
    init() {
      for (let i = 0; i < this.THINGCOUNT; i++) {
        let a = {};
        //randomly pick one tag
        a.code = this.code[Math.round(Math.random() * this.code.length)];
        a.x = Math.random()*this.canvas.width; //random X
        a.y = Math.random()*this.canvas.height -this.canvas.height; // random Y that is above the screen
        a.speed = Math.random()*10;
        this.things.push(a);
      }

      setInterval(() => {
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
        for (let i = 0; i < this.THINGCOUNT; i++) {
          let a = this.things[i];
          this.ctx.fillText(a.code, a.x, a.y);
          a.y += a.speed; // fall downwards by the speed amount
          if (a.y > 600) a.y = -50; // if off the screen at bottom put back to top
        }
      }, 90);
    }
  },
  mounted() {
    this.width = this.$refs.container.offsetWidth
    this.height = this.$refs.container.offsetHeight
    let canvas = this.$refs.canvas;
    canvas.width  = this.width;
    canvas.height = this.height;
    console.log(this.height)
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = 'lime';
    canvas.style.background = "black";
    this.canvas = canvas;
    this.ctx = ctx;
    this.init();
  }
}
</script>

<style scoped>
.container {
  box-sizing: border-box;
  padding: 2rem;

  margin: 0;
  font-weight: 300;
  text-align: left;
}
</style>
