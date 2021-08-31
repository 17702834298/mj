<template>
  <div class="Saleliet_body">
    <!-- 头部 -->
    <div>
      <h2 style="font-size: 28px">角色列表</h2>
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

        <el-date-picker
          v-model="value5"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        >
        </el-date-picker>
      </div> -->
    </div>

    <!-- 主体 -->
    <div class="Saleliet_main_table">
      <div style="margin: 15px 0">
        <el-input
          placeholder="请输入内容"
          v-model="input3"
          class="input-with-select"
          style="width: 30%"
        >
          <el-select v-model="select" slot="prepend" placeholder="请选择">
            <el-option label="父ASIN" value="1"></el-option>
            <el-option label="子ASIN" value="2"></el-option>
            <el-option label="商品标题" value="3"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>

      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="ID" width="240"> </el-table-column>
        <el-table-column prop="name" label="名字"> </el-table-column>
        <el-table-column prop="name_cn" label="权限">
          <template slot-scope="scope">
            <p v-show="!scope.row.disable">{{ scope.row.name_cn }}</p>
            <el-input
              v-show="scope.row.disable"
              v-model="scope.row.name_cn"
              style="height: 40px"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              @click="handleEdit(scope.row)"
              v-show="!scope.row.disable"
              style="background-color:#52c6d9;color:#fff"
              >编辑</el-button
            >
            <el-button
              @click="handlecaryy(scope.row)"
              v-show="scope.row.disable"
              style="margin-left:0"
              >完成</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { roles, rolesupdate } from "@/apis/admin";
// import {customers} from "@/apis/Client"
export default {
  data() {
    return {
      options1: [
        {
          value: "选项1",
          label: "CNY 人名币",
        },
        {
          value: "选项2",
          label: "USD 美元",
        },
      ],
      token: "", //角色的token
      value1: "", //下拉框1
      value5: "", //日期选择器
      tableData: [], //客户列表
      input3: "", //表格上搜索框
      select: "", //输入框上面多选框的值
    };
  },
  created() {
    this.info();
  },
  methods: {
    // 获取角色信息
    info() {
      this.token = localStorage.token;
      roles({ Authorization: this.token }).then((res) => {
        console.log(res.data.items);
        for (let obj of res.data.items) {
          obj.disable = false;
        }
        this.tableData = res.data.items;
      });
    },
    // 修改角色信息
    handleEdit(row) {
      row.disable = true;
    },
    // 保存角色信息
    handlecaryy(row) {
      row.disable = false;
      rolesupdate({ role_id: row.id, permission_ids: row.permissions }).then(
        (res) => {
          console.log(res.data);
          res.data.items.name_cn = row.name_cn;
          if (row.disable) {
            this.info();
          }
        }
      );
    },
  },
};
</script>

<style lang="less" scoped>
.Saleliet_body {
  height: 100%;
  background-color: #f1f3f6;
  padding: 20px;
  //   头部
  .Saleliet_selectbox {
    width: 32%;
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
  .Saleliet_main_table {
    margin-top: 20px;
  }
}
</style>
