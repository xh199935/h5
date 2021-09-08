<template>
  <div class="header-content">
    <div class="left"></div>
    <div class="center">{{msg}}</div>
    <div class="right"></div>
  </div>

</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const msg = ref('456')
    return {
      msg
    }
  }
}
</script>

<style scoped>
.header-content {
  height: 60px;
}
</style>