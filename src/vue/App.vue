<template>
  <div id="app">
    <p class="root">{{ text }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '1234'
    }
  }
}
</script>

<style scoped>
  .root {
    color: red;
  }
</style>
