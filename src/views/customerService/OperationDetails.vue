<template>
  <div class="OperationDetails_body">
    <!-- 头部导航 -->
    <div class="OperationDetails_header">
      <div class="OperationDetails_header_title">
        <div>
          <h2 style="font-size: 28px; color: #555; padding: 10px 0">
            金币流水
          </h2>
          <p style="font-size: 14px; color: #aaa">
            设置非亚马逊后台产生的运营费用，如商品测评、站外推广、水电费等。
          </p>
        </div>

        <!-- 头部输入框 -->
        <div style="margin-top: 15px">
          <el-input
            placeholder="请输入要查找的内容"
            v-model="input3"
            class="input-with-select"
            style="width: 300px"
            size="mini"
          >
            <el-select v-model="select" slot="prepend" placeholder="账户尾号">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>

      <!-- 时间日期选择器 -->
      <div class="OperationDetails_header_datebox">
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

    <!-- 主体 -->
    <div class="Trade_main">
      <!-- 主体导航 -->
      <div class="Trade_main_nav">
        <!-- 主体导航左边 -->
        <div class="Trade_main_nav_left">
          <el-dropdown>
            <el-button type="primary"  size='mini' style="background-color:#52c6d9">
              更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item>双皮奶</el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <!-- 交易事件 -->
          <div>
            <label>交易事件：</label>
            <el-select v-model="value" placeholder="请选择" size="mini">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <!-- 交易名目 -->
          <div>
            <label>交易名目：</label>
            <el-select v-model="value" placeholder="请选择" size="mini">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <!-- 交易金额 -->
          <div>
            <label>交易金额：</label>
            <el-input-number
              v-model="numSmall"
              size="mini"
              controls-position="right"
              @change="handleChange"
              :min="1"
              :max="10"
            ></el-input-number>
            -
            <el-input-number
              v-model="numBig"
              size="mini"
              controls-position="right"
              @change="handleChange"
              :min="1"
              :max="10"
            ></el-input-number>
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
        >
          <el-table-column prop="address" label="描述" :formatter="formatter">
          </el-table-column>
          <el-table-column prop="address" label="序号" :formatter="formatter">
          </el-table-column>
          <el-table-column prop="address" label="店铺" :formatter="formatter">
          </el-table-column>
          <el-table-column prop="address" label="分类" :formatter="formatter">
          </el-table-column>

          <el-table-column
            prop="address"
            label="费用产生规则"
            :formatter="formatter"
          >
          </el-table-column>
          <el-table-column prop="address" label="商品" :formatter="formatter">
          </el-table-column>
          <el-table-column prop="date" label="金额" sortable width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="费用所属日期"
            sortable
            width="180"
          >
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input3: "", //头部输入框值
      select: "", //头部输入框里多选框的值
      DateValue: "", //日期选择器的值
      options: "", //交易事件数组
      value: "", //交易事件值
      numSmall: 1, //交易最小金额
      numBig: 1, //交易最大金额
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    //    交易金额点击事件
    handleChange(value) {
      console.log(value);
    },
    formatter(row) {
      return row.address;
      //  column
    },
    // 下拉菜单
    handleClick() {
        alert('button click');
      }
  },
};
</script>

<style lang="less" scoped>
.OperationDetails_body {
  height: 100%;
  background-color: #f0f0f0;
  padding: 20px;
  // 头部
  .OperationDetails_header {
    .OperationDetails_header_title {
      display: flex;
      justify-content: space-between;
    }
    .OperationDetails_header_datebox {
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
        width: 60%;
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