<template>
  <div ref="container" class="container h-full w-full">
    <div ref="title" id="title"></div>
  </div>
</template>

<script>
let titleId = "title", title;

export default {
  name: "FlowTitle",
  data() {
    return {
      height: 500,
      width: 500,
      phrases: [
        "Frankly, my dear, I don't give a damn",
        "Here's looking at you, kid",
        "You're gonna need a bigger boat",
        "May the Force be with you",
        "Toto, I've a feeling we're not in Kansas anymore",
        "I'm going to make him an offer he can't refuse",
        "Of all the gin joints in all the towns in all the world, she walks into mine",
        "You talkin' to me?",
        "There's no place like home",
        "The first rule of Fight Club is: You do not talk about Fight Club",
        "I am your father",
        "Hello. My name is Inigo Montoya. You killed my father. Prepare to die",
        "Why so serious?",
        "I'll have what she's having",
        "This is the beginning of a beautiful friendship"
      ],
    }
  },
  methods: {
    flowTitle() {
      this.pickPhrase();
      this.wrapChars();
      this.pickLetters();
    },
    pickPhrase() {
      title.innerText = this.phrases[Math.floor(Math.random() * this.phrases.length)];
    },
    wrapChars() {
      let text = title.innerText + "";
      title.innerText = "";

      let words = text.split(" ");
      for (let word of words) {
        let div = document.createElement("div");
        div.classList.add("word");
        for (let chr of word) {
          let span = document.createElement("span");
          span.innerHTML = chr;
          div.appendChild(span);
        }
        title.appendChild(div);
      }
    },
    pickLetters() {
      let letters = Array.from(document.getElementsByTagName("span"));
      function switchLetter() {
        letters[0].classList.add("show");
        letters.shift();
        if (letters.length > 0) setTimeout(switchLetter, 50);
      }
      switchLetter();
    }
  },
  mounted() {
    this.width = this.$refs.container.offsetWidth
    this.height = this.$refs.container.offsetHeight
    title = document.getElementById(titleId);
    if (title) {
      this.flowTitle();
      document.addEventListener("click", (ev) => {
        ev.preventDefault();
        this.flowTitle();
      }, false);
    }
  }
}
</script>

<style scoped>
.container {
  font-family: Lato, Arial, sans-serif;
  font-size: 10px;
  font-weight: 900;

  background-image: url("https://picsum.photos/g/1920/1080?image=53");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  /*width:  90vw;*/
  /*height: 90vh;*/
  margin: auto;
  color: #fff;
  /*font-size: 2vh;*/
  line-height: 1.4;
  letter-spacing: 0.05rem;

  display: flex;
  justify-content: center;
  align-items: center;
}
#title { user-select: none; }
.word {
  transition: all 0.2s ease;
  cursor: pointer;
}
.word:hover { color: #f14; }

.word:nth-child(5n+1) {
  font-size: 8vh;
  text-transform: uppercase;
}
.word:nth-child(3n+2) {
  font-size: 4vh;
  text-transform: uppercase;
  animation:
      slide-l1 1s ease-out 1 forwards,
      slide-l2 1s linear 1s 1 forwards;
}
.word:nth-child(3n)   {
  font-size: 3vh;
  text-transform: uppercase;
  animation:
      slide-r1 1.5s ease-out 1 forwards,
      slide-r2 1.0s linear 1.5s 1 forwards;
}

span { opacity: 0; }
span.show { animation: fade-in 2.0s ease 1 forwards; }

@keyframes fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes slide-l1 {
  from { transform: translateX(-120px); }
  to   { transform: translateX(10px);  }
}
@keyframes slide-l2 {
  from { transform: translateX(10px); }
  to   { transform: translateX(30px); }
}
@keyframes slide-r1 {
  from { transform: translateX(120px);  }
  to   { transform: translateX(20px); }
}
@keyframes slide-r2 {
  from { transform: translateX(20px); }
  to   { transform: translateX(0px); }
}
</style>