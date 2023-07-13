<template>
  <div class="h-full w-full container">
    <div v-html="foo"></div>
  </div>
</template>

<script>
export default {
  name: "CodeShower",
  props: ['foo'],
}
</script>

<style scoped>

</style>