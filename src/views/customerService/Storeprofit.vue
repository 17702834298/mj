<template>
  <div class="Storeprofit_body">
    <!-- 头部导航 -->
    <div class="Storeprofit_header">
      <h2 style="font-size: 28px; color: #555; padding: 10px 0">客户列表</h2>
      <p style="font-size: 14px; color: #aaa">
        数据源来自于亚马逊后台payment付款数据，广告报告，月仓储费用报告等，7天的数据可能存在变动，系统会自动校正。由于跨国网络波动导致finance
        api存在小部分店铺销售返回异常，小部分店铺7月份财务销量统计轻微偏差，目前船长已与亚马逊官方共同解决，现已正常。
      </p>
      <!-- 搜索框 -->
      <div class="Storeprofit_header_select">
        <el-input placeholder="请输入内容" v-model="inputValue" clearable>
        </el-input>
        <el-button
          @click="clickSearch()"
          style="
            position: relative;
            left: -69px;
            border: 0;
            height: 40px;
            background-color: #52c6d9;
            color: #fff;
          "
          >搜索</el-button
        >
      </div>
    </div>

    <!-- 主体 -->
    <div class="Storeprofit_main">
      <el-card shadow="always">
        <!-- 表格 -->
        <div style="padding-top: 20px">
          <el-table
            :data="tableData"
            :cell-style="TableCellStyle"
            style="width: 100%"
          >
            <el-table-column prop="id" label="ID" width="40px">
            </el-table-column>
            <el-table-column prop="account" label="目标账户"> </el-table-column>
            <el-table-column prop="name" label="用户名"> </el-table-column>
            <el-table-column prop="email" label="邮箱"> </el-table-column>
            <el-table-column prop="head_img" label="头像">
              <template slot-scope="scope">
                <img
                  :src="scope.row.head_img"
                  alt="头像"
                  width="60px"
                  height="60px"
                  style="border-radius: 50%"
                />
              </template>
            </el-table-column>
            <el-table-column prop="login_at" label="登录时间">
            </el-table-column>
            <el-table-column prop="sign_up_at" label="注册时间">
            </el-table-column>
            <el-table-column prop="terminal" label="客户端"> </el-table-column>
            <el-table-column prop="account_type" label="目标账号类型">
            </el-table-column>
            <el-table-column prop="account_state" label="目标账号状态">
              <template slot-scope="scope">
                <p v-show="!scope.row.disable">{{ scope.row.account_state }}</p>
                <el-input
                  v-show="scope.row.disable"
                  v-model="scope.row.account_state"
                  style="height: 40px"
                ></el-input>
              </template>
            </el-table-column>
            <el-table-column prop="status" label="平台认证状态">
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  v-show="!scope.row.disable"
                  @click="handleEdit(scope.row)"
                  style="background-color:#52c6d9;color:#fff"
                  >修改</el-button
                >
                <el-button
                  size="mini"
                  v-show="scope.row.disable"
                  style="margin-left: 0; background-color: yellowgreen;color:#fff"
                  @click="handleDelete(scope.row)"
                  >保存</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div>

        <!-- 分页 -->
        <div>
          <el-pagination
            @size-change="sizechange"
            @current-change="pagechange"
            :current-page="curpage"
            :page-sizes="changepagesizes"
            :page-size="curpagesize"
            layout="total,sizes,prev,pager,next,jumper"
            :total="Total"
          >
          </el-pagination>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { customers, customersUpdate } from "@/apis/Client";
export default {
  data() {
    return {
      DateValue: "", //日期选择器
      tableData: [], //客户列表
      curpage: 1, //分页
      changepagesizes: [10, 20, 30], //分页选择
      curpagesize: 10, // 每页显示数量
      Total: 100, //总页数
      token: "", //登陆获取的token值
      inputValue: "", //搜索框的值
      inputList: "", //搜索出来的数组
      id: "", //客户id
      new: "", //新的平台状态值
    };
  },
  created() {
    this.ClientList();
    //   绑定enter事件
    var lett = this;
    document.onkeydown = function() {
      var key = window.event.keyCode;
      if (key == 13) {
        //13是键盘上enter的映射
        lett.clickSearch();
      }
    };
  },
  methods: {
    // 获取客户列表
    ClientList() {
      this.token = localStorage.token;
      console.log(this.token);
      customers({
        page_number: this.curpage,
      }).then((res) => {
        for (let obj of res.data.items.data) {
          obj.disable = false;
        }
        console.log(res.data.items.data);
        this.tableData = res.data.items.data;
        this.Total = res.data.items.total;
      });
    },
    // 搜索
    clickSearch() {
      customers({ Authorization: this.token, keyword: this.inputValue }).then(
        (res) => {
          for (const objList of res.data.items.data) {
            this.inputList = objList;
            this.tableData = [this.inputList];
            console.log(this.inputList);
          }
        }
      );
    },
    // 分页器事件
    sizechange(newsize) {
      this.curpagesize = newsize;
      //  this.ClientList();
    },
    pagechange(newsize) {
      this.curpage = newsize;
      // this.ClientList();
    },
    // 修改客户资料
    handleEdit(row) {
      row.disable = true;
      this.new = row.account_state;
      console.log(this.new);
    },
    // 保存客户资料
    handleDelete(row) {
      row.disable = false;
      row.account_state = this.new;
      customersUpdate({ Authorization: this.token, customer_id: row.id }).then(
        (res) => {
          console.log(res);
        }
      );
    },
    // 改变表格字体颜色
    TableCellStyle({ columnIndex }) {
      if (columnIndex === 8) {
        return "color: red";
      } else if (columnIndex === 9) {
        return "color:#52c6d9";
      } else if (columnIndex === 10) {
        return "color: blue";
      }
    },
  },
};
</script>

<style lang="less" scoped>
.Storeprofit_body {
  padding: 20px;
  background-color: #f0f0f0;
  // overflow: scroll;
  //   头部
  .Storeprofit_header {
    width: 70%;
    .Storeprofit_header_select {
      padding-top: 20px;
      width: 38%;
      display: flex;
      justify-content: space-between;
    }
  }
  //   主体
  .Storeprofit_main {
    padding-top: 20px;
    .Storeprofit_main_nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .Storeprofit_main_nav_left {
        width: 18%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        a {
          text-decoration: none;
          color: #40c0d5;
        }
      }
    }
  }
}
</style>
