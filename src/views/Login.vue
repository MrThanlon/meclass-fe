<template>
  <div>
    <div class="S-T" v-if="page==0">
      <button class="student" v-on:click="page=1">我 是<br>学 生</button>
      <button class="teacher" v-on:click="page=2">我 是<br>老 师</button>
      <button class="back" v-on:click="goback()">返回上页</button>
    </div>

    <div class="login-div" v-if="page==1">
      <h1>用 户 登 录</h1>
      <br>
      <input class="login-text" type="text" placeholder="用 户 名" v-model="loginForm.username">
      <br>
      <input class="login-text" type="password" placeholder="密 码" v-model="loginForm.password">
      <button class="login-btn" @click="loginAct(0)">登 录</button>
      <a class="sign" v-on:click="page=11">注 册 用 户</a>
      <a class="comback" v-on:click="page=0">返 回 上 页</a>
    </div>

    <div class="login-div" v-if="page==2">
      <h1>教 师 登 录</h1>
      <br>
      <input class="login-text" type="text" placeholder="用 户 名" v-model="loginForm.username">
      <br>
      <input class="login-text" type="password" placeholder="密 码" v-model="loginForm.password">
      <button class="login-btn" @click="loginAct(1)">登 录</button>
      <a class="sign" v-on:click="page=22">注 册 教 师</a>
      <a class="comback" v-on:click="page=0">返 回 上 页</a>
    </div>

    <div class="login-div" v-if="page==11">
      <h1>用 户 注 册</h1>
      <br>
      <input class="login-text" type="text" placeholder="用 户 名" v-model="registerForm.username">
      <br>
      <input class="login-text" type="password" placeholder="密 码" v-model="registerForm.password">
      <br>
      <input class="login-text" type="password" placeholder="确 认 密 码" v-model="registerForm.confirm">
      <button class="login-btn" @click="registerAct(0)">注 册</button>
      <a class="sign" v-on:click="page=1">前 去 登 录</a>
      <a class="comback" v-on:click="page=0">返 回 上 页</a>
    </div>

    <div class="login-div" v-if="page==22">
      <h1>教 师 注 册</h1>
      <br>
      <input class="login-text" type="text" placeholder="用 户 名" v-model="registerForm.username">
      <br>
      <input class="login-text" type="password" placeholder="密 码" v-model="registerForm.password">
      <br>
      <input class="login-text" type="password" placeholder="确 认 密 码" v-model="registerForm.confirm">
      <button class="login-btn" @click="registerAct(1)">注 册</button>
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
      code: '0',
      msg: '请求失败',
      loginForm: {
        username: '',
        password: ''
      },
      registerForm: {
        username: '',
        password: '',
        confirm: ''
      }
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    },
    async loginAct (flag) {
      if (this.loginForm.username === '') {
        this.$emit('alert', '请输入用户名！')
        return
      }
      if (this.loginForm.password === '') {
        this.$emit('alert', '请输入密码！')
        return
      }
      const res = await api.user.login({
        uname: this.loginForm.username,
        pwd: this.loginForm.password,
        flag
      })
      this.msg = res.msg
      this.code = res.code

      if (this.code === 0) {
        // 登录失败
        this.$emit('alert', this.msg)
      } else {
        this.$router.push('/?username=' + this.loginForm.username)
      }
    },
    async registerAct (flag) {
      if (this.registerForm.username === '') {
        this.$emit('alert', '请输入用户名！')
        return
      }
      if (this.registerForm.password === '') {
        this.$emit('alert', '请输入密码！')
        return
      }
      if (this.registerForm.password !== this.registerForm.confirm) {
        this.$emit('alert', '两次密码输入不一致！')
        return
      }
      const res = await api.user.register({
        uname: this.registerForm.username,
        pwd: this.registerForm.password,
        flag
      })
      this.msg = res.msg
      this.code = res.code
      if (this.code === 0) {
        // 登录失败
        this.$emit('alert', this.msg)
      } else {
        this.$emit('alert', { type: 'success', text: '注册成功！跳转至登录界面...' })
        if (flag === 0) {
          this.page = 1
        } else {
          this.page = 2
        }
      }
    }
  }
}
</script>

<style scoped>
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
  color: rgb(92, 87, 78);
  font-size: 100px;
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
  color: rgb(92, 87, 78);
  font-size: 100px;

}
.student:hover{
  background-color: #d3a304 ;
  opacity: 0.9;
  cursor: pointer;
  background-image: url("../assets/student.jpg");
  font-size: 0px;
}
.teacher:hover{
  background-color: #d6b031 ;
  opacity: 0.9;
  cursor: pointer;
  background-image: url("../assets/teacher.jpg");
  font-size: 0px;
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
