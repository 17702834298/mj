<template>
  <div class="Login_body">
    <!-- 登录盒子 -->
    <div class="Login_input" v-show="!show">
      <div class="Login_input_box">
        <div class="Login_input_box_Switch">
          <el-button
            round
            size="mini"
            @click="clickTab"
            style="border: 0; background-color: rgba(255, 255, 255, 0)"
            >注册</el-button
          >
        </div>
        <div class="Login_input_box_title">
          <h2>Mi +</h2>
        </div>
        <el-input
          placeholder="请输入账号"
          prefix-icon="el-icon-user"
          v-model="info"
          clearable
          style="width: 300px; outline: none"
        >
        </el-input>

        <el-input
          placeholder="请输入密码"
          prefix-icon="el-icon-unlock"
          v-model="pwd"
          show-password
          clearable
          style="width: 300px; outline: none"
        ></el-input>
        <el-button type="primary" round @click="clickLogin">登录</el-button>
      </div>
    </div>
    <!-- 注册盒子 -->
    <div class="Login_register" v-show="show">
      <div class="Login_register_box">
        <div class="Login_register_box_Switch">
          <el-button
            round
            size="mini"
            @click="clickLog"
            style="border: 0; background-color: rgba(255, 255, 255, 0)"
            >登录</el-button
          >
        </div>
        <div class="Login_register_box_title">
          <h2>Mi +</h2>
        </div>
        <el-input
          placeholder="请输入账号"
          prefix-icon="el-icon-user"
          v-model="info"
          clearable
          style="width: 300px; outline: none"
        >
        </el-input>

        <el-input
          placeholder="请输入密码"
          prefix-icon="el-icon-unlock"
          v-model="pwd"
          show-password
          clearable
          style="width: 300px; outline: none"
        ></el-input>
        <el-button type="primary" round @click="clickRegister">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "@/apis/admin";
export default {
  data() {
    return {
      info: "Kenya Kunze", //账号
      pwd: "123456", //密码
      show: false,
    };
  },
  created() {
    //   绑定enter登录
    var lett = this;
    document.onkeydown = function() {
      var key = window.event.keyCode;
      if (key == 13) {
        //13是键盘上enter的映射
        lett.clickLogin();
      }
    };
  },
  methods: {
    //   登录
    clickLogin() {
      if (this.info == "" || this.pwd == "") {
        this.$message({
          message: "账号或密码不能为空！！",
          type: "warning",
        });
      } else {
        login({ name: this.info, password: this.pwd }).then((res) => {
          console.log(res);
          localStorage.token = res.data.token;
          localStorage.name = this.info;
          localStorage.pwd = this.pwd;

          //   localStorage.roleId = this.roleId    判断登录的管理员角色是什么
          this.$router.push("/Home/index");
        });
      }
    },
    // 注册切换
    clickTab() {
      this.show = true;
    },
    // 登录切换
    clickLog() {
      this.show = false;
    },
    // 注册账号
    clickRegister() {
      this.$message({
        message: "账号注册成功！",
        type: "success",
      });
      this.show = false;
    },
  },
};
</script>

<style lang="less" scoped>
.Login_body {
  width: 100%;
  height: 100%;
  background-color: deepskyblue;
  // 登录
  .Login_input {
    position: fixed;
    top: 40%;
    right: 20%;
    .Login_input_box {
      height: 200px;
      padding: 20px;
      border-radius: 20px;
      display: flex;
      background-color: aquamarine;
      flex-direction: column;
      justify-content: space-around;
      .Login_input_box_Switch {
        position: absolute;
        top: 5%;
        right: 5%;
      }
      .Login_input_box_title {
        text-align: center;
        color: deepskyblue;
      }
    }
  }
  // 注册
  .Login_register {
    position: fixed;
    top: 40%;
    right: 20%;
    .Login_register_box {
      height: 200px;
      padding: 20px;
      border-radius: 20px;
      display: flex;
      background-color: aquamarine;
      flex-direction: column;
      justify-content: space-around;
      .Login_register_box_Switch {
        position: absolute;
        top: 5%;
        right: 5%;
      }
      .Login_register_box_title {
        text-align: center;
        color: deepskyblue;
      }
    }
  }
}
</style>
