<template>
  <div class="index_banner">
    <div class="block">
      <el-carousel height="800px">
        <el-carousel-item v-for="item in banner" :key="item.id">
          <img :src="item.src" :alt="item.desc" />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- banner上传 -->
    <div>
      <!-- <el-upload
        action="http://192.168.1.200:8081/banners/create"
        list-type="picture-card"
        :show-file-list="false"
        :on-success="picsSuccess"
        :on-remove="picsRemove"
        :file-list="fileList"
        data{this.token,}
      >
        <i class="el-icon-plus"></i>
      </el-upload> -->

        <!-- 网上做法 -->
      <div style="padding: 50px">
        <el-form
          class="form-wrapper padding"
          ref="addForm"
          :model="addForm"
          :rules="addRules"
          label-width="110px"
        >
          <el-form-item label="活动图片：" prop="photo">
            <el-upload
              :action="bannersCreate"
              multiple
              accept="image/png, image/jpeg"
              list-type="picture-card"
              :before-upload="beforeUploadPicture"
              :on-preview="handlePictureCardPreview"
              :on-progress="uploadProgress"
              :on-remove="handleRemove"
              :on-success="uploadSuccess"
              :on-error="uploadError"
              :show-file-list="true"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="addEnsure">保存</el-button>
          </el-form-item>
        </el-form>
        <el-dialog
          class="preview-modal"
          :visible.sync="imgVisible"
          append-to-body
        >
          <img width="100%" :src="dialogImageUrl" alt="photo" />
        </el-dialog>
      </div>


      
    </div>
  </div>
</template>

<script>
import { banners, bannersCreate } from "@/apis/banner";
export default {
  data() {
    return {
      banner: [],
      newlist: [], //新旧图片数组
      fileList: [], //回显banner图
      token: "",


      // 以下值网上的
      addForm: {
        photo: "", // 活动图片
      },
      addRules: {
        // 表单验证规则
        photo: [{ required: true, message: "请上传活动图片", trigger: "blur" }],
      },
      uploadComplete: true, // 图片上传完成状态
      bannersCreate: bannersCreate.imgURL + "upload/img",
      imgVisible: false, // 上传图片预览
      dialogImageUrl: "", // 图片预览地址
    };
  },
  created() {
      bannersCreate
    this.token = localStorage.token;
    //   调用banner列表接口
    this.bannerList();
  },
  methods: {
    //   获取banner
    bannerList() {
      banners({}).then((res) => {
        if (res.data.code == 0 && res.data.error == "") {
          this.banner = res.data.items.data;
          console.log("banner", this.banner);
        } else {
          console.log(res.data.error);
        }
      });
    },
    // banner上传
    picsSuccess(res) {
      this.newlist.push(res.imgUrl);
    },
    // 照片墙删除
    picsRemove(file) {
      let pname = file.respone ? file.response.imgUrl : file.name;

      //   循环数组，找到名字并删除
      for (let i = 0; i < this.newlist.length; i++) {
        if (this.newlist[i] == pname) {
          this.newlist.splice(i, 1);
          break;
        }
      }
    },
    

    // 以下代码网上的
    initForm() {
        if(this.$refs.addForm){
          this.$refs.addForm.resetFields();
        }
      },
      // 上传图片前调用方法
      beforeUploadPicture(file) {
        if(file.size > 10*1024*1024){
          this.$message.error("上传图片不能大于10M");
          return false;
        }
      },
      // 上传图片时调用
      uploadProgress(event,file, fileList){
        this.uploadComplete = false;
      },
      // 上传图片成功
      uploadSuccess(res, file, fileList) {
        this.uploadComplete = true;
        this.fileChange(fileList);
      },
      // 上传图片出错
      uploadError(err, file, fileList) {
        this.$message.error("上传出错");
      },
      // 移除图片
      handleRemove(file, fileList) {
        this.fileChange(fileList);
      },
      // 设置photo值
      fileChange(fileList) {
        let temp_str = '';
        if(fileList.length > 0){
          for(let i=0; i<fileList.length; i++){
            if(fileList[i].response){
              if(fileList[i].response.code === 0){
                if(i===0){
                  temp_str += fileList[i].response.data;
                } else {
                  // 最终photo的格式是所有已上传的图片的url拼接的字符串（逗号隔开）
                  temp_str += ',' + fileList[i].response.data; 
                }
              }
            }
          }
        }
        this.addForm.photo = temp_str;
      },
      // 图片预览
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.imgVisible = true;
      },
      // 确认添加
      addEnsure(){
        if(!this.uploadComplete){
          this.$message.error("图片正在上传，请稍等");
          return;
        }
        this.$refs.addForm.validate((valid) => {
          if(valid){
            let params = {
              photo: this.addForm.photo,
            };
           console.info(params);
            // 调用接口...
            
          } else {
            this.$message.error("请填写所有必填项");
          }
        });
      }
    }
  
};
</script>

<style lang="less" scoped>
.index_banner {
  height: 100%;
}

// banner样式
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 100%;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>