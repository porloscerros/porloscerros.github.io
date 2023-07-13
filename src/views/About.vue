<template>
<div class="bg-gray-400 font-sans leading-normal tracking-normal">
  <!--Hero-->
  <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
    <!--Left Col-->
    <div class="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
      <CodeWriter :foo="foo"></CodeWriter>
    </div>
    <!--Right Col-->
    <div class="w-full lg:w-1/2 lg:py-6 text-center">
      <CodeShower :foo="foo"></CodeShower>
    </div>
  </div>
</div>
</template>

<script>
// import HtmlRain from '@/components/HtmlRain.vue'
import CodeWriter from '@/components/CodeWriter.vue'
import CodeShower from '@/components/CodeShower.vue'
export default {
  name: "About",
  data() {
    return {
      foo: `<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <header></header>
    <main>
      <p class="uppercase tracking-loose">porloscerros.github.io</p>
      <h1 class="font-bold text-3xl my-4">Work in progress</h1>
      <p class="leading-normal mb-4">It looks weird between the title and button below.</p>
    </main>
    <footer></footer>
  </body>
</html>`
    }
  },
  mounted() {

  },
  components: {
    // HtmlRain,
    CodeWriter,
    CodeShower,
  }
}
</script>

<style scoped>

</style>
