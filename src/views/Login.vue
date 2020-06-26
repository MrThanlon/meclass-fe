<template>
  <div class="t">
    <div class="S-T" v-if="page==0">
      <button class="student" v-on:click="page=1">我是学生</button>
      <button class="teacher" v-on:click="page=2">我是老师</button>
      <button class="back">返回上页</button>
    </div>

    <div class="login-div" v-if="page==1">
      <h1>用 户 登 录</h1>
      <br>
      <input class="login-text" type="text" placeholder="用 户 名" v-model="loginForm.username">
      <br>
      <input class="login-text" type="password" placeholder="密 码" v-model="loginForm.password">
      <button class="login-btn" @click="loginAct">登 录</button>
      <a class="sign" v-on:click="page=11">注 册 用 户</a>
      <a class="comback" v-on:click="page=0">返 回 上 页</a>
    </div>

    <div class="login-div" v-if="page==2">
      <h1>教 师 登 录</h1>
      <br>
      <input class="login-text" type="text" placeholder="用 户 名" v-model="loginForm.username">
      <br>
      <input class="login-text" type="password" placeholder="密 码" v-model="loginForm.password">
      <button class="login-btn" @click="loginAct">登 录</button>
      <a class="sign" v-on:click="page=22">注 册 教 师</a>
      <a class="comback" v-on:click="page=0">返 回 上 页</a>
    </div>

    <div class="login-div" v-if="page==11">
      <h1>用 户 注 册</h1>
      <br>
      <input class="login-text" type="text" placeholder="用 户 名" v-model="signupForm.username">
      <br>
      <input class="login-text" type="password" placeholder="密 码" v-model="signupForm.password">
      <br>
      <input class="login-text" type="password" placeholder="确 认 密 码" v-model="signupForm.confirm">
      <button class="login-btn" @click="signupAct">注 册</button>
      <a class="sign" v-on:click="page=1">前 去 登 录</a>
      <a class="comback" v-on:click="page=0">返 回 上 页</a>
    </div>

    <div class="login-div" v-if="page==22">
      <h1>教 师 注 册</h1>
      <br>
      <input class="login-text" type="text" placeholder="用 户 名" v-model="signupForm.username">
      <br>
      <input class="login-text" type="password" placeholder="密 码" v-model="signupForm.password">
      <br>
      <input class="login-text" type="password" placeholder="确 认 密 码" v-model="signupForm.confirm">
      <button class="login-btn" @click="signupAct">注 册</button>
      <a class="sign" v-on:click="page=2">前 去 登 录</a>
      <a class="comback" v-on:click="page=0">返 回 上 页</a>
    </div>
  </div>
</template>

<script>
import api from '../utils/api'
export default {
  name: 'Login',
  data () {
    return {
      page: 0,
      loginForm: {
        username: '',
        password: ''
      },
      signupForm: {
        username: '',
        password: '',
        confirm: ''
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
        flag: 0,
        // 返回身份，若为1则为学生登录，若为2则为教师登录
        identity: this.page
      })
    },
    async signupAct () {
      if (this.signupForm.username === '') {
        this.$emit('alert', '请输入用户名！')
        return
      }
      if (this.signupForm.password === '') {
        this.$emit('alert', '请输入密码！')
        return
      }
      if (this.signupForm.password !== this.signupForm.confirm) {
        this.$emit('alert', '两次密码输入不一致！')
        return
      }
      await api.user.signup({
        uname: this.signupForm.username,
        pwd: this.signupForm.password,
        flag: 0,
        // 返回身份，若为11则为学生注册，若为2则为教师注册
        identity: this.page
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
  background: #f5e46e;
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
  box-sizing: border-box;
  outline: none;
  border: none;
  font-family: "montserrat",sans-serif;
  color: rgb(247, 241, 218);
  margin-left:auto;
  margin-right:auto;
}

input::-webkit-input-placeholder{
    text-align: center;
}

.login-text{
  margin:4px;
  background: #c0bba7;
  border-radius: 50px;
}
.login-btn{
  margin-top: 30px;
  margin-bottom: 80px;
  background: #5e4924;
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
  margin-left:auto;
  margin-right:auto;
}
.login-btn:hover{
  transform:scale(0.96);
  background:#554322;
}
.sign{
  cursor:pointer;
  color:black;
  text-decoration: none;
  position:absolute;
  bottom: 10%;
  right: 10%;
}
body{
  margin: 0;
  padding: 0;
  background:  #faf8e9;
}
.student{
  width: 400px;
  height: 400px;
  text-align: center;
  background: #f5e46e;
  position:absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%,-50%);
  border-radius: 30px ;
  border: none;
}
.teacher{
  width: 400px;
  height: 400px;
  text-align: center;
  background: #f5e46e;
  position:absolute;
  top: 50%;
  left: 70%;
  transform: translate(-50%,-50%);
  border-radius: 30px ;
  border: none;
}
.student:hover{
    background-color: #d3a304 ;
    opacity: 0.9;
    cursor: pointer;
}
.teacher:hover{
    background-color: #d6b031 ;
    opacity: 0.9;
    cursor: pointer;
}
.back{
  width: 300px;
  height: 50px;
  text-align: center;
  background: rgb(154, 188, 226);
  position:absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%,-50%);
  border-radius: 10px ;
  border: none;
}
.back:hover{
    background: rgb(20, 102, 196);
    cursor: pointer;
}
.comback{
  cursor:pointer;
  color:black;
  text-decoration: none;
  position:absolute;
  bottom: 10%;
  left: 10%;
}
</style>
