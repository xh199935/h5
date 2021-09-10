<template>
  <div class="header-content">
    <img v-if="back"
         src="@/assets/img/back_icon.svg"><img v-else
         src="@/assets/img/back_white_icon.svg">
    {{title ? title : $route.meta.title}}
  </div>
</template>

<script>
export default {
  props: {
    back: false
  },
  setup (props) {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.header-content {
  position: relative;
  width: 100vw;
  height: 50px;
  position: fixed;
  left: 0;
  top: 0;
  color: rgb(255, 255, 255);
  background: rgb(60, 120, 255);
  text-align: center;
  line-height: 50px;
  img {
    position: absolute;
    left: 5vw;
    width: 17px;
    height: 17px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>