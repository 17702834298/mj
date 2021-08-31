<template>
  <div class="Trade_body">
    <!-- 头部导航 -->
    <div class="Trade_header">
      <h2 style="font-size: 28px; color: #555; padding: 10px 0">订单列表</h2>
      <p style="font-size: 14px; color: #aaa">
        数据来源自亚马逊后台Payment付款数据，当日的数据可能存在延迟，请耐心等待。
      </p>

      <!-- 时间日期选择器 -->
      <!-- <div class="Trade_header_listbox">
        
      </div> -->
    </div>

    <!-- 主体 -->
    <div class="Trade_main">
      <!-- 主体导航 -->
      <div class="Trade_main_nav">
        <!-- 主体导航左边 -->
        <div class="Trade_main_nav_left">
          <!-- 交易方式 -->
          <div>
            <label>支付方式：</label>
            <el-select
              v-model="value"
              @change="changeWay()"
              placeholder="请选择"
              size="mini"
            >
              <el-option
                v-for="item in Wayoptions"
                :key="item.value"
                :label="item.value"
                :value="item"
              >
              </el-option>
            </el-select>
          </div>
          <!-- 终端来源 -->
          <div>
            <label>终端来源：</label>
            <el-select
              v-model="terminal"
              @change="changes()"
              placeholder="请选择"
              size="mini"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </div>
        <!-- 主体导航右边 -->
        <div class="Trade_main_nav_right">
          <div class="Trade_main_nav_right">
            <el-button
              style="background-color: #52c6d9; color: #fff"
              size="mini"
              >生成报告</el-button
            >
            <el-button
              style="background-color: #52c6d9; color: #fff"
              size="mini"
              >下载报告</el-button
            >
          </div>
        </div>
      </div>
      <!-- 主体表格 -->
      <div class="Trade_main_table">
        <el-table
          :data="tableData"
          style="width: 100%; border-radius: 10px"
          :default-sort="{ prop: 'date', order: 'descending' }"
          :cell-style="TableCellStyle"
        >
          <!-- <el-table-column type="expand">
            <template slot-scope="scope">
              <p>目标账号：{{scope.order_info}}</p>
            </template>
          </el-table-column> -->
          <el-table-column prop="id" label="订单id" width="90px" sortable>
          </el-table-column>
          <el-table-column prop="order_no" label="订单号" sortable>
          </el-table-column>
          <el-table-column prop="price" label="订单金额" sortable>
          </el-table-column>
          <el-table-column prop="pay_type" label="支付方式"> </el-table-column>
          <el-table-column prop="terminal" label="终端"> </el-table-column>
          <el-table-column prop="status" label="订单状态"> </el-table-column>
          <el-table-column prop="pay_state" label="支付状态"> </el-table-column>
          <el-table-column prop="pay_time" label="支付时间"> </el-table-column>
          <el-table-column prop="created_at" label="订单时间">
          </el-table-column>
          <!-- <el-table-column prop="customers.name" label="客户名称">
          </el-table-column> -->
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                >查看</el-button
              >
              <!-- <el-button type="text" size="small">编辑</el-button> -->
            </template>
          </el-table-column>
        </el-table>

        
      </div>
      <!-- 分页 -->
        <div style="margin-top:20px;padding:10px;display: flex;justify-content: flex-end;">
          <el-pagination
            @size-change="sizechange"
            @current-change="pagechange"
            :current-page="curpage"
            :page-size="curpagesize"
            layout="total,prev, pager, next, jumper"
            :total="Total"
          >
          <!-- :page-sizes="changepagesizes" -->
          </el-pagination>
        </div>
    </div>
  </div>
</template>

<script>
import { orders,settingsPayment } from "@/apis/Order";
export default {
  data() {
    return {
      DateValue: "", //时间日期选择器
      options: [
        { lable: "ios", value: "ios" },
        { lable: "Android", value: "Android" },
      ], //终端来源值
      value: "", //支付方式默认值
      Wayoptions: [], //支付方式
      terminal: "", //终端来源默认值
      tableData: [], //订单列表
      token: "", //登录获取的token
      order_info: "", //详情页
      id: "", //订单id
      curpage: 1, //分页
      // changepagesizes: [10, 20, 30], //分页选择
      curpagesize: 10, // 每页显示数量
      Total: 100, //总页数
    };
  },
  created() {
    // 获取token
    this.token = localStorage.token;
    this.id = localStorage.id
    // 调用接口
    this.OrderList();
    this.settingsPaymentList();
  },
  methods: {
    // 获取订单列表
    OrderList() {
      orders({
        Authorization: this.token,
        page_number: this.curpage,
      }).then((res) => {
        res.data.items.data;
        this.tableData = res.data.items.data;
        this.Total = res.data.items.total
        console.log(res.data.items.data);
      });
    },
    // 获取订单详情
    handleClick(row) {
      localStorage.id = row.id
      this.$router.push('/Home/ReceiptRecord')
    },
    // 获取支付方式
    settingsPaymentList(){
      settingsPayment({Authorization:this.token}).then((res) => {
        this.Wayoptions = res.data.items.setting_value
      })
    },
    // 交易方式
    changeWay() {
      orders({
        Authorization: this.token,
        pay_type: this.Wayoptions.value,
      }).then((res) => {
        this.tableData = res.data.items.data;
      });
    },
    // 终端来源
    changes() {
      orders({
        Authorization: this.token,
        terminal: this.options.value,
      }).then((res) => {
        this.tableData = res.data.items.data;
      });
    },
    // 改变表格字体颜色
    TableCellStyle({ columnIndex}) {
			if (columnIndex === 2 ) {
				return 'color: red'
			}else if(columnIndex === 5 ){
        return 'color:#52c6d9'
      }else if(columnIndex === 6 ){
        return 'color: blue'
      }
		},
    // 分页器事件
    sizechange(value) {
      this.curpagesize = value;
       this.OrderList();
    },
    pagechange(value) {
      this.curpage = value;
      this.OrderList();
    },
  },
};
</script>

<style lang="less" scoped>
.Trade_body {
  
  background-color: #f0f0f0;
  padding: 20px;
  .Trade_header {
    .Trade_header_datebox {
      padding-top: 20px;
    }
  }

  //   主体
  .Trade_main {
    background-color: #fff;
    border-radius: 10px;
    margin-top: 20px;
    // 主体导航
    .Trade_main_nav {
      padding: 10px;
      display: flex;
      justify-content: space-between;
      .Trade_main_nav_left {
        width: 35%;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
      }
    }
    // 主体表格
    .Trade_main_table {
      margin-top: 20px;
      border-radius: 10px;
    }
  }
}
</style>