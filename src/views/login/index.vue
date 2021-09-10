<template>
  <div class="login">
    <Header :back="false" />
    <div class="bg-img"></div>
    <div class="login-form">
      <h2>登录</h2>
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field v-model="username"
                     name="username"
                     left-icon="user-circle-o"
                     placeholder="用户名"
                     :rules="[{ required: true, message: '请填写用户名' }]" />
          <van-field v-model="password"
                     type="password"
                     name="password"
                     left-icon="smile-o"
                     placeholder="密码"
                     :rules="[{ required: true, message: '请填写密码' }]" />
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button round
                      block
                      type="primary"
                      native-type="submit">
            立即登录
          </van-button>
        </div>
      </van-form>
    </div>
  </div>

</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  setup () {

    const router = useRouter()
    const store = useStore()

    const username = ref('admin')
    const password = ref('123456')
    const onSubmit = (p) => {
      const data = {
        token: 'true',
        userInfo: {
          name: '牛牛',
          age: '1',
          sex: '男'
        }
      }
      store.dispatch('SET_USERINFO', data)
      router.push('/')
    }

    return {
      // form,
      username,
      password,
      onSubmit
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  height: 30vh;
  background: rgb(60, 120, 255);
  position: fixed;
  left: 0;
  top: 51px;
  width: 100vw;
  .bg-img {
    position: fixed;
    width: 54.133333vw;
    height: 44.4vw;
    right: 0;
    top: 6.4vw;
    background: url("../../assets/img/login-bg.png") 0 0 / contain no-repeat;
    z-index: 9999;
  }
  .login-form {
    position: fixed;
    top: 36vw;
    background: white;
    width: 92vw;
    height: 40vh;
    left: 4vw;
    border-radius: 10px;
    h2 {
      color: #3c78ff;
      text-align: left;
      padding-left: 36px;
    }
  }
}
</style>