<template>
  <div class="login-wrap">
    <!-- <p>Login Component</p> -->
    <div class="box">
      <el-form ref="form" :model="form">
        <div class="img"><img src="./logo_index.png" alt></div>
        <el-form-item>
          <el-input v-model="form.molile" placeholder="手机号"></el-input>
        </el-form-item>

        <el-form-item>
          <el-col :span="14">
           <el-input v-model="form.code" placeholder="验证码"></el-input>
          </el-col>
          <el-col :span="4" :offset="1">
            <el-button @click="GetCode">获取验证码</el-button>
          </el-col>

        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">登陆</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {

  name: 'AppLogin',
  data () {
    return {
      form: {
        moblie: '13180216727',
        code: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    GetCode () {
      const { moblie } = this.form
      axios({
        method: 'GET',
        url: `http://ttapi.research.itcast.cn/mp/v1_0/captchas/${moblie}`
      }).then(res => console.log(res))
    }
  }
}
</script>
<style lang='less' scopend>
.login-wrap {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  .box {
    // border: 1px solid #000;
    background-color: #fff;
    padding: 15px 60px;
    border-radius: 10px;
    .img {
      margin-bottom:20px;
    }

  }
}
</style>
