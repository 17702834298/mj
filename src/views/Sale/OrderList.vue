<template>
  <div class="OrderList_body">
    <!-- 头部 -->
    <div>
      <h2 style="font-size: 28px">管理员列表</h2>
      <!-- 下拉框 -->
      <div class="OrderList_selectbox">
        <el-input v-model="inputValue" style="width:50%" placeholder="请输入需要查找的内容"></el-input>
        <el-button size="mini" @click="clickSo">搜索</el-button>
        
          <el-date-picker
            v-model="DateValue"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
      
        
      </div>
      
    </div>

    <!-- 主体 -->
    <div class="OrderList_main_table">
      <el-table :data="tableData" border  style="width: 100%">
        <el-table-column prop="id" label="ID" width="180"> </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="email" sortable label="邮箱">
        </el-table-column>
        <el-table-column prop="created_at" sortable label="创建时间">
        </el-table-column>
        <el-table-column prop="updated_at" sortable label="修改时间">
        </el-table-column>
        <el-table-column prop="updated_at" sortable label="修改时间">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {users} from '@/apis/admin'
export default {
  data() {
    return {
      
      DateValue: "", //日期选择器
      tableData: [], //客户数据
      token:'', //登录时获取的token
      inputValue:''  //全局搜索值
    };
  },
  created(){
    this.user()
  },
  methods:{
    // 获取列表
    user(){
      this.token = localStorage.token
      users({Authorization:this.token,keyword:this.inputValue}).then((res) => {
        console.log(res);
        this.tableData = res.data.items.data
      })
    },
    // 搜索
    clickSo(){
      users({Authorization:this.token,keyword:this.inputValue}).then((res) => {
        // console.log(res);
        if(this.inputValue == res.keyword){
          this.tableData = res.data.items.data
          console.log(this.tableData);
        }
        
      })
    }
  }
};
</script>

<style lang="less" scoped>
.OrderList_body {
  height: 100%;
  background-color: #f1f3f6;
  padding: 20px;
  //   头部
  .OrderList_selectbox {
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }
  .OrderList_nav_data {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .OrderList_Order {
      width: 18%;
      background-color: #fff;
      // margin-top: 20px;
      padding: 10px;
      box-sizing: border-box;

      .OrderList_Order_data {
        display: flex;
        justify-content: space-between;
        .OrderList_Order_data_left {
            padding-top: 10px;
        }
      }
    }
  }
  //   主体
  .OrderList_main_table {
    margin-top: 20px;
  }
}
</style>