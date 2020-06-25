<template>
  <div class="login-div" id="Login">
      <h1>用 户 登 录</h1>
      <input class="login-text" type="text" placeholder="用 户 名" v-model="loginForm.username">
      <br>
      <input class="login-text" type="password" placeholder="密 码" v-model="loginForm.password">
      <button class="login-btn" @click="loginAct">登 录</button>
      <a href="signup.html" class="sign">注 册 用 户</a>
  </div>
</template>

<script>
import api from '../utils/api'
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async loginAct () {
      if (this.loginForm.username === '') {
        this.$emit('alert', '请输入用户名！')
        return
      }
      if (this.loginForm.password === '') {
        this.$emit('alert', '请输入密码！')
        return
      }
      await api.user.login({
        uname: this.loginForm.username,
        pwd: this.loginForm.password,
        flag: 0
      })
    }
  }
}
</script>

<style scoped>
body{
  margin: 0;
  padding: 0;
  background:  #faf8e9;
}
.login-div{
  width: 300px;
  padding: 20px;
  text-align: center;
  background: #ecd9ae;
  position:absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  overflow: hidden;
  border-radius: 30px ;
}
.login-div h1{
  margin-top: 50px;
  color: rgb(92, 87, 78);
  font-size: 40px;
}
.login-div input{
  display: block;
  width: 100%;
  padding: 0 16px;
  height: 44px;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  border: none;
  font-family: "montserrat",sans-serif;
  color: rgb(247, 241, 218);
}
.login-text{
  margin:4px;
  background: #c0bba7;
  border-radius: 50px;
}
.login-btn{
  margin-top: 30px;
  margin-bottom: 80px;
  background: #70582c;
  color: #fff;
  border-radius: 44px;
  cursor: pointer;
  transition: 0.8s;
  display: block;
  width: 100%;
  padding: 0;
  height: 44px;
  text-align: center;
  box-sizing: border-box;
  border: none;
  font-family: "montserrat",sans-serif;
}
.login-btn:hover{
  transform:scale(0.96);
  background:#554322;
}
.sign{
  cursor:pointer;
  color:black;
  text-decoration: none;
}
</style>
