<template>
  <div class="userinfo_body">
    <!-- 头像上传 -->
    <div class="userinfo_box">
      <div class="userinfo_Infoimg">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <div class="userinfo_name">
          <h2 style="padding: 10px 0; border-bottom: 1px solid #ccc">
            <i class="el-icon-user-solid" style="padding-right: 10px"></i
            >用户名：<label>{{ name }}</label>
          </h2>
          <h4 style="padding: 10px 0; border-bottom: 1px solid #ccc">
            <span class="iconfont icon-role" style="padding-right: 10px"></span
            >角色名：<label></label>
          </h4>
          <h4 style="padding: 10px 0; border-bottom: 1px solid #ccc">
            <span class="iconfont icon-type" style="padding-right: 10px"></span
            >账号类型：<label></label>
          </h4>
        </div>
      </div>
      <div class="userinfo_name_Btn">
        <el-button
          size="mini"
          @click="clickRemove"
          style="background-color:#52C6D9;color:#fff"
          >退出登录</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl:
        "https://tse2-mm.cn.bing.net/th/id/OIP-C.o9F0LZlXmWriP10VfI1QwgAAAA?w=180&h=180&c=7&o=5&pid=1.7",
      name: "", //用户名
      pwd: "", //密码
    };
  },
  created() {
    this.name = localStorage.name;
    this.pwd = localStorage.pwd;
  },
  methods: {
    //   头像上传
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg/png/jpg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    // 退出登录
    clickRemove() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
};
</script>

<style lang="less" scoped>
.userinfo_body {
  height: 100%;
  background-color: #f0f0f0;
  padding-top: 5%;
  box-sizing: border-box;
  // 用户信息大盒子
  .userinfo_box {
    margin: 0 5% 5% 5%;
    padding: 30px;
    border-radius: 20px;
    background-color: #fff;
    .userinfo_name_Btn {
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
  }
}
// 头像上传大盒子
.userinfo_Infoimg {
  width: 50%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  // 头像上传
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 120px;
    height: 120px;
    line-height: 120px;
    text-align: center;
  }
  .avatar {
    width: 120px;
    height: 120px;
    display: block;
    border-radius: 50%;
  }
  // 用户信息
  .userinfo_name {
    width: 50%;
    margin-left: 5%;
    h2,
    h4 {
      font-weight: bolder;
    }
    label {
      font-weight: normal;
    }
  }
}
</style>
