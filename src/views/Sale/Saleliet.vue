<template>
  <div class="Saleliet_body">
    <!-- 头部 -->
    <div>
      <h2 style="font-size: 28px">权限列表</h2>
      <!-- 下拉框 -->
      <!-- <div class="Saleliet_selectbox">
        <el-select v-model="value1" placeholder="请选择">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            size="mini"
          >
          </el-option>
        </el-select>
        <el-select v-model="value2" placeholder="请选择">
          <el-option
            v-for="item in options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="value3" placeholder="请选择">
          <el-option
            v-for="item in options3"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-select v-model="value4" placeholder="请选择">
          <el-option
            v-for="item in options4"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div> -->
      <!-- 数据 -->
      <!-- <div class="Saleliet_nav_data">
        <div class="Saleliet_Order" v-for="item in 6" :key="item">
          <p>订单数</p>
          <label>--</label>
          <div class="Saleliet_Order_data">
            <div class="Saleliet_Order_data_left">
              <p>昨日</p>
              <label>--</label>
            </div>
            <div class="Saleliet_Order_data_right">
              <p>上周同日</p>
              <label>--</label>
            </div>
          </div>
        </div>
      </div> -->
    </div>

    <!-- 主体 -->
    <div class="Saleliet_main_table">
      <el-table :data="tableData" border  style="width: 100%">
        <el-table-column prop="id" label="ID" width="180"> </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="name_cn" sortable label="权限">
        </el-table-column>
        <!-- <el-table-column prop="amount2" sortable label="数值 2">
        </el-table-column>
        <el-table-column prop="amount3" sortable label="数值 3">
        </el-table-column> -->
      </el-table>
    </div>
  </div>
</template>

<script>
import {permissions} from '@/apis/admin'
export default {
  data() {
    return {
      token:'',  //登录时的token
      tableData: []
    };
  },
  created(){
    this.perm()
  },
  methods:{
    perm(){
      this.token = localStorage.token
      permissions({Authorization:this.token}).then((res) => {
        console.log(res);
        this.tableData = res.data.items
      })
    }
  }
};
</script>

<style lang="less" scoped>
.Saleliet_body {
  height: 100%;
  background-color: #f1f3f6;
  padding: 20px;
//   头部
  .Saleliet_selectbox {
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }
  .Saleliet_nav_data {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .Saleliet_Order {
      width: 16%;
      background-color: #fff;
      // margin-top: 20px;
      padding: 10px;
      box-sizing: border-box;

      .Saleliet_Order_data {
        display: flex;
        justify-content: space-between;
        .Saleliet_Order_data_left {
          width: 48%;
          border-right: #ccc solid 1px;
        }
        .Saleliet_Order_data_right {
          width: 48%;
        }
      }
    }
  }
//   主体
  .Saleliet_main_table{
      margin-top: 20px;
  }
}
</style>