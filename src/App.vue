<template>
  <div>
    <div class="root">
      <div class="box1"></div>
      <div class="box2"></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '123aaa4'
    }
  }
}
</script>

<style scoped>
  .root {
    color: red;
  }
</style>
