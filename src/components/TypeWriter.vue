<template>
  <div class="h-full w-full container bg-gray-900">
    <h1 class="typewrite"></h1>
  </div>
</template>

<script>

function Typewriter(el, messages, speed, period) {
  this.el = el;
  this.messages = messages;
  this.speed  = parseInt(speed, 10)  || 200;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.loops = 0;
  this.isClearing = false;
  this.tick();
}

Typewriter.prototype.tick = function() {
  let msg  = this.messages[this.loops % this.messages.length];
  let edge = this.isClearing ? this.txt.length-1 : this.txt.length+1;
  this.txt = msg.substring(0, edge);
  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var delta = this.speed/2 + Math.random() * this.speed;
  if (this.isClearing) delta /= 2;

  if (!this.isClearing && this.txt === msg) {
    this.isClearing = true;
    delta = this.period;
  } else if (this.isClearing && this.txt === '') {
    this.loops++;
    this.isClearing = false;
    delta = this.period / 2;
  }
  setTimeout(() => this.tick(), delta);
};

export default {
  name: "TypeWriter",
  data() {
    return {
      messages: [
        "“In three words I can sum up everything I have learned about life: it goes on.”",
        "“We love the things we love for what they are.”",
        "“Love is an irresistible desire to be irresistibly desired.”",
        "“If we could not laugh we would all go insane.”",
        "“Freedom lies in being bold.”",
        "“Two roads diverged in a wood, and I - I took the one less traveled by, And that has made all the difference.”",
        "“Forgive me my nonsense as I also forgive the nonsense of those who think they talk sense.”",
        "“Home is the place where, when you have to go there, they have to take you in.”"
      ],
      speed: 150,
      period: 2000
    }
  },
  mounted() {
    let elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; ++i) {
      if (this.messages) new Typewriter(elements[i], this.messages, this.speed, this.period);
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Amatic+SC');
*, *:after, *:before { box-sizing: inherit; }
.container {
  box-sizing: border-box;
  font-size: 62.5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 50rem;
  margin: 0 auto;
  padding: 2rem;

  background-color: #111;
  color: #fff;

  font-family: "Amatic SC", serif !important;
  font-weight: 300;
  text-align: center;
}

h1 {
  font-size: 4rem;
  letter-spacing: 0.1rem;
  user-select: none;
}

.typewrite > span.wrap::after {
  content: "|";
  color: #f61;
}
</style>