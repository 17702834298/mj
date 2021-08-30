<template>
  <div class="ReceiptRecord_body">
    <!-- 头部导航 -->
    <div class="ReceiptRecord_header">
      <div class="ReceiptRecord_header_title">
        <div>
          <h2 style="font-size: 28px; color: #555; padding: 10px 0">
            订单详情
          </h2>
          <p style="font-size: 14px; color: #aaa">
            数据来源自亚马逊后台Payment付款数据，主要用于财务回款对帐。
          </p>
        </div>

        <!-- 头部输入框 -->
        <!-- <div style="margin-top: 15px">
          <el-input
            placeholder="请输入要查找的内容"
            v-model="input3"
            class="input-with-select"
            style="width: 300px"
            size="mini"
          >
            <el-button @click="clickSo" slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div> -->
      </div>

      <!-- 时间日期选择器 -->
      <div class="ReceiptRecord_header_datebox">
        <el-date-picker
          v-model="DateValue"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          size="mini"
        >
        </el-date-picker>
      </div>
    </div>

    <!-- 标签页 -->
    <el-card shadow="always" style="margin-top: 20px">
      <div class="ReceiptRecord_tab">
        <div
          class="ReceiptRecord_tab_box"
          v-for="item in tabbox"
          :key="item.name"
        >
          <p>{{ item.name }}</p>
          <p style="color: #52c6d9">
            $ <label style="font-size: 30px">{{ item.num }}</label>
          </p>
        </div>
      </div>
    </el-card>

    <!-- 主体表格 -->
    <el-card shadow="always" style="margin-top: 20px">
      <div class="ReceiptRecord_main">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="account" label="目标账号"> </el-table-column>
          <el-table-column prop="type" label="订单类型"> </el-table-column>
          <el-table-column prop="tags" label="订单标签"> </el-table-column>
          <el-table-column prop="quantity" label="任务量"> </el-table-column>
          <el-table-column prop="price" label="价格"> </el-table-column>
          <el-table-column prop="priority" label="优先级"> </el-table-column>
          <el-table-column prop="task.progress" label="任务进展量">
            <template slot-scope="">
              <el-progress :percentage="30"></el-progress>
            </template>
          </el-table-column>
          <el-table-column prop="task.quantity" label="订单任务量">
          </el-table-column>
          <el-table-column prop="task.status" label="任务状态">
          </el-table-column>
          <el-table-column prop="task.priority" label="任务优先级">
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
import { info } from "@/apis/Order";
export default {
  data() {
    return {
      DateValue: "", //日期选择器
      tabbox: [
        { name: "已结总计", num: 0 },
        { name: "转账失败", num: 0 },
        { name: "未结金额", num: 0 },
      ], //标签页数组
      tableData: [],
      input3: "", //搜索框值
      select: "", //搜索框多选
      token: "", //登录时的token
      id: "", //获取的订单id
      // inputList:'', //新的数据组
    };
  },
  created() {
    // 调用订单详情接口
    this.ordersinfoList();
  },
  methods: {
    // 获取订单详情
    ordersinfoList() {
      this.id = localStorage.id;
      this.token = localStorage.token;

      info({ Authorization: this.token, order_id: this.id }).then((res) => {
        this.tableData = res.data.items.order_info;
        console.log(this.tableData);
      });
    },
    
    // 模糊搜索
    /*  clickSo(){
      info({ Authorization: this.token, order_id: this.id,keyword:this.input3 }).then((res) => {
        for (const objList of res.data.items.order_info) {
            this.inputList = objList;
            this.tableData = [this.inputList];
            console.log(this.inputList);
          }
      });
    } */
  },
};
</script>

<style lang="less" scoped>
.ReceiptRecord_body {
  background-color: #f0f0f0;
  padding: 20px;
  // 头部
  .ReceiptRecord_header {
    .ReceiptRecord_header_title {
      display: flex;
      justify-content: space-between;
    }
    .ReceiptRecord_header_datebox {
      padding-top: 20px;
    }
  }
  //   标签页
  .ReceiptRecord_tab {
    background-color: #fff;
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    .ReceiptRecord_tab_box {
      width: 15%;
      border-right: 1px solid #ccc;
      padding-left: 20px;
    }
    .ReceiptRecord_tab_box :last-child {
      border: 0;
    }
  }
}
</style>