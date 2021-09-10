<template>
  <div class="home">
    <h2>领养</h2>
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const msg = ref('得宠上已经发布了36295只宠物信息')
    return {
      msg
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  h1 {
    text-align: left;
  }
  h3 {
    background: #130c0e;
    color: #fff;
  }
}
</style>