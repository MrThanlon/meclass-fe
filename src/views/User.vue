<template>
  <div class="d-flex w-100 justify-content-center pt-5 flex-wrap">
    <div class="card col-10 col-md-6 col-xl-4 p-0 m-1">
      <div class="card-header">用户信息</div>
      <div class="card-body d-flex flex-wrap justify-content-center">
        <div class="d-flex justify-content-center border rounded mb-3">
          <i class="fas fa-user m-1" style="font-size: 3rem"></i>
        </div>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">
              用户名
            </span>
          </div>
          <input type="text" class="form-control" v-model="username" readonly>
        </div>

        <div class="input-group mb-5">
          <div class="input-group-prepend">
            <span class="input-group-text">身份</span>
          </div>
          <input type="text" class="form-control" :value="flag?'教师':'学生'" readonly>
        </div>
      </div>
    </div>
    <div class="card col-10 col-md-6 col-xl-4 p-0 m-1">
      <div class="card-header">修改密码（未完成）</div>
      <div class="card-body">
        <form @submit="changePassword" class="w-100">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">原密码</span>
            </div>
            <input type="text" class="form-control" v-model="oPassword">
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">新密码</span>
            </div>
            <input type="text" class="form-control" v-model="nPassword">
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">再次输入</span>
            </div>
            <input type="text" class="form-control" v-model="rPassword">
          </div>

          <div class="d-flex justify-content-center w-100">
            <button class="btn btn-outline-primary m-1" type="submit">
              <i class="fas fa-check m-1"></i>
              <span>提交</span>
            </button>
          </div>
        </form>
      </div>
    </div>
    <card-upload v-if="flag" class="m-1"></card-upload>
    <div class="d-flex w-100 justify-content-center">
      <button class="btn btn-outline-success m-1" @click="$router.push('/')">
        <i class="fas fa-arrow-left m-1"></i>
        <span>返回首页</span>
      </button>
      <button class="btn btn-outline-danger m-1" @click="logout">
        <i class="fas fa-sign-out-alt m-1"></i>
        <span>注销</span>
      </button>
    </div>
  </div>
</template>

<script>
import api from '../utils/api'
import cardUpload from '../components/cardUpload'

export default {
  name: 'User',
  data () {
    return {
      username: '',
      oPassword: '',
      nPassword: '',
      rPassword: '',
      flag: 0
    }
  },
  methods: {
    async changePassword () {
      return false
    },
    async logout () {
      document.cookie = ''
      await this.$router.push('/login')
    }
  },
  async mounted () {
    const res = await api.user.get()
    this.username = res.data.uname
    this.flag = res.data.flag
  },
  components: {
    cardUpload
  }
}
</script>

<style scoped>

</style>
