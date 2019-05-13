<template>
  <div class="login-box">
    <div class="content">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    var checkUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户不能为空'));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    return {
      ruleForm: {
        username: '',
        pass: '',
      },
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' },
        ],
        username: [
          { validator: checkUsername, trigger: 'blur' },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
          window.localStorage.setItem('login', this.ruleForm.username);
          this.$router.push({ path: '/' });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped lang="stylus">
  .login-box
    width 100%
    height 100vh
    background url("../../../public/img/bg.jpg")
    display flex
    justify-content center
    align-items center

  .content
      width 24rem
      /*margin 0 auto*/
      /*margin-top 16rem*/
      background rgba(245, 245, 220, 0.8)
      display: flex
      padding 3rem 0 1rem 0
      border-radius 2rem
      /*justify-content center*/
</style>
