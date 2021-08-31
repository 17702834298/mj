<template>
  <div class="research_body">
    <!-- 选品头部 -->
    <div class="research_nav">
      <h2 class="research_nav_title">选品调研</h2>
      <p class="research_nav_p">输入要调研的关键词</p>
      <!-- 输入框 -->
      <!-- <div style="margin-top: 15px"> -->
      <el-input
        placeholder="请输入内容"
        v-model="inputValue"
        class="input_with_select"
      >
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <!-- </div> -->

      <p style="padding: 10px 0">
        1次查询=6水滴，剩余水滴<label style="color: red">{{ 5 }}</label
        >个,<a href="#">前往充值</a>
      </p>

      <!-- 选择器 -->
      <div class="research_nav_select">
        <p>请选择本次调研项目：</p>
        <el-select v-model="value" clearable placeholder="请选择">
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

    <!-- 选品主体 -->
    <div class="research_main">
      <!-- 表格 -->
      <div class="research_main_tablebox">
        <el-table :data="tableData" style="width: 100%; border-radius: 10px">
          <el-table-column type="expand">
            <template slot-scope="">
              <div
                 id="PieChartOne"
                :style="{ width: '500px', height: '300px',backgroundColor:'#52c6d9' }"
              ><h1>111</h1>
             </div>
              
            </template>
          </el-table-column>
          <el-table-column label="商品 ID" prop="id"> </el-table-column>
          <el-table-column label="商品名称" prop="name"> </el-table-column>
          <el-table-column label="描述" prop="desc"> </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >展开</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!-- echarts图表 -->
      <div class="research_echarts_box" v-show="show">
        <div
          style="font-size: 26px; padding: 20px 0 0 20px; font-weight: bolder"
        >
          市场概况
        </div>
        <!-- 图表 -->
        <div class="research_echarts_box_top">
          <!-- 第一个饼图 -->
          <el-card shadow="always" style="margin-top: 20px"
            ><!-- <div
              id="PieChartOne"
              :style="{ width: '500px', height: '300px' }"
            ></div
          > --></el-card
          >
          <!-- 第二个饼图 -->
          <el-card shadow="always" style="margin-top: 20px"
            ><div
              id="PieChartTow"
              :style="{ width: '500px', height: '300px' }"
            ></div
          ></el-card>
          <!-- 第三个饼图 -->
          <el-card shadow="always" style="margin-top: 20px"
            ><div
              id="PieChartThree"
              :style="{ width: '500px', height: '300px' }"
            ></div
          ></el-card>
          <!-- 第四个饼图 -->
          <el-card shadow="always" style="margin-top: 20px"
            ><div
              id="PieChartFour"
              :style="{ width: '500px', height: '300px' }"
            ></div
          ></el-card>
          <!-- 第五个饼图 -->
          <el-card shadow="always" style="margin-top: 20px"
            ><div
              id="PieChartFive"
              :style="{ width: '500px', height: '300px' }"
            ></div
          ></el-card>
          <!-- 第六个饼图 -->
          <el-card shadow="always" style="margin-top: 20px"
            ><div
              id="PieChartSix"
              :style="{ width: '500px', height: '300px' }"
            ></div
          ></el-card>
        </div>
        <div
          style="font-size: 26px; padding: 20px 0 0 20px; font-weight: bolder"
        >
          指标选品
        </div>
        <!-- 表格 -->
        <div class="research_echarts_box_table">
          <!-- 卡片阴影盒子 -->
          <el-card shadow="always">
            <!-- 指标搜索 -->
            <ul class="research_echarts_box_table_ul">
              <li v-for="item in inputTable" :key="item.name">
                <label
                  style="
                    width: 100px;
                    display: flex;
                    justify-content: flex-end;
                    font-size: 14px;
                  "
                  >{{ item.name }}：</label
                >
                <input
                  type="text"
                  style="
                    border-bottom: solid 1px #ccc;
                    border-top: 0;
                    border-left: 0;
                    border-right: 0;
                    outline: none;
                    width: 70px;
                    text-align: center;
                  "
                  placeholder="最小"
                />
                -
                <input
                  type="text"
                  style="
                    border-bottom: solid 1px #ccc;
                    border-top: 0;
                    border-left: 0;
                    border-right: 0;
                    outline: none;
                    width: 70px;
                    text-align: center;
                  "
                  placeholder="最大"
                />
              </li>
            </ul>
            <!-- 分割线 -->
            <el-divider></el-divider>
            <!-- 表格头部按钮 -->
            <div class="research_echarts_box_table_nav">
              <div></div>
              <div>
                <el-button
                  style="background-color: #52c6d9; color: #fff"
                  size="mini"
                  >自定义指标</el-button
                >
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
            <!-- 表格 -->
            <el-table :data="tabData" style="width: 100%">
              <el-table-column prop="date" label="产品信息" width="180">
              </el-table-column>
              <el-table-column prop="name" label="价格" width="180">
              </el-table-column>
              <el-table-column prop="address" label="购物车价格">
              </el-table-column>
              <el-table-column prop="address" label="Rank排名">
              </el-table-column>
              <el-table-column prop="address" label="reviews数量">
              </el-table-column>
              <el-table-column prop="address" label="月销量预估">
              </el-table-column>
              <el-table-column prop="address" label="卖家数"> </el-table-column>
              <el-table-column prop="address" label="同时购买">
              </el-table-column>
              <el-table-column prop="address" label="品牌"> </el-table-column>
              <el-table-column prop="address" label="上架时间">
              </el-table-column>
              <el-table-column prop="address" label="操作"> </el-table-column>
            </el-table>
            <!-- 分页 -->
            <div class="research_echarts_box_table_Pagination">
              <el-pagination
                :page-sizes="[10, 20, 30, 50]"
                :page-size="100"
                background
                layout="total,sizes,prev, pager, next"
                :total="100"
              >
              </el-pagination>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      show: false,
      value: "", //多选框值
      select: "", //搜索框多选值
      options: [
        { value: "选项1", label: "美国" },
        { value: "选项2", label: "英国" },
        { value: "选项3", label: "中国" },
      ],
      inputValue: "", //输入框值
      tableData: [
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
        {
          id: "12987123",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
        {
          id: "12987125",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
        {
          id: "12987126",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
      ], //第一层表格
      search: "",
      tabData: [
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
      ], //展开层表格
      inputTable: [
        { name: "价格" },
        { name: "费用" },
        { name: "毛利" },
        { name: "毛利率" },
        { name: "购物车价格" },
        { name: "Rank排名" },
        { name: "review数" },
        { name: "review星级" },
        { name: "月销量估计" },
        { name: "卖家数 " },
        { name: "上架时间" },
        { name: "货运方式" },
      ], //展开层 选品搜索框的值
    };
  },
  mounted() {
    
    this.oneinit(); //调用echarts
    this.towinit();
    this.threeinit();
    this.fourinit();
    this.fiveinit();
    this.sixinit();
  },
  methods: {
    // 表格展开
    handleEdit(index, row) {
      console.log(index, row);

      this.show = !this.show;
    },

    // 第一个饼图
    oneinit() {
      /* this.$nextTick(() => {
        console.log(document.getElementById("PieChartOne")); */
        var chartDom = document.getElementById("PieChartOne");
        var myChart = echarts.init(chartDom);
        var option = {
          tooltip: {
            trigger: "item",
          },
          legend: {
            top: "5%",
            left: "center",
          },
          series: [
            {
              name: "访问来源",
              type: "pie",
              radius: ["40%", "70%"],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: "#fff",
                borderWidth: 2,
              },
              label: {
                show: false,
                position: "center",
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: "40",
                  fontWeight: "bold",
                },
              },
              labelLine: {
                show: false,
              },
              data: [
                { value: 1048, name: "搜索引擎" },
                { value: 735, name: "直接访问" },
                { value: 580, name: "邮件营销" },
                { value: 484, name: "联盟广告" },
                { value: 300, name: "视频广告" },
              ],
            },
          ],
        };

        option && myChart.setOption(option);
      // });
    },
    // 第二个饼图
    towinit() {
      var chartDom = document.getElementById("PieChartTow");
      var myChart = echarts.init(chartDom);
      var option = {
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "40",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: "搜索引擎" },
              { value: 735, name: "直接访问" },
              { value: 580, name: "邮件营销" },
              { value: 484, name: "联盟广告" },
              { value: 300, name: "视频广告" },
            ],
          },
        ],
      };

      option && myChart.setOption(option);
    },
    // 第三个饼图
    threeinit() {
      var chartDom = document.getElementById("PieChartThree");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        legend: {
          top: "bottom",
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "面积模式",
            type: "pie",
            radius: [10, 90],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data: [
              { value: 40, name: "rose 1" },
              { value: 38, name: "rose 2" },
              { value: 32, name: "rose 3" },
              { value: 30, name: "rose 4" },
              { value: 28, name: "rose 5" },
              { value: 26, name: "rose 6" },
              { value: 22, name: "rose 7" },
              { value: 18, name: "rose 8" },
            ],
          },
        ],
      };

      option && myChart.setOption(option);
    },
    // 第四个柱状图
    fourinit() {
      var chartDom = document.getElementById("PieChartFour");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
          },
        ],
      };

      option && myChart.setOption(option);
    },
    // 第五个折线图
    fiveinit() {
      var chartDom = document.getElementById("PieChartFive");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      };

      option && myChart.setOption(option);
    },
    // 第六个柱状图
    sixinit() {
      var chartDom = document.getElementById("PieChartSix");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: "世界人口总量",
          subtext: "数据来自网络",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["2011年", "2012年"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: "category",
          data: ["巴西", "印尼", "美国", "印度", "中国", "世界人口(万)"],
        },
        series: [
          {
            name: "2011年",
            type: "bar",
            data: [18203, 23489, 29034, 104970, 131744, 630230],
          },
          {
            name: "2012年",
            type: "bar",
            data: [19325, 23438, 31000, 121594, 134141, 681807],
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<style lang="less" scoped>
.research_body {
  height: 100%;
  display: flex;
  flex-direction: column;

  // 导航
  .research_nav {
    background-color: #133f75;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    // padding: 20px 0;
    .research_nav_title {
      padding: 20px 0;
      font-size: 40px;
    }
    .research_nav_p {
      padding: 10px 0;

      color: #ccc;
    }
    .input_with_select {
      margin: 20px 0;
      width: 40%;
    }
    .research_nav_select {
      display: flex;
      align-items: center;
      padding: 20px 0 100px 0;
    }
    a {
      color: #fff;
      text-decoration: none;
    }
    a:hover {
      color: deepskyblue;
      text-decoration: solid;
    }
  }
  // 主体
  .research_main {
    flex: 1;
    background-color: #f0f0f0;
    padding: 10px 40px;
    .research_main_tablebox {
      position: relative;
      top: -40px;
      border-radius: 10px;
    }

    // echarts容器盒子
    .research_echarts_box {
      background-color: #fcfcfc;
      .research_echarts_box_top {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 20px;
      }
      // 表格
      .research_echarts_box_table {
        margin-top: 20px;
        padding: 20px;
        // 搜索ul
        .research_echarts_box_table_ul {
          margin-top: 20px;
          background-color: #fff;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          li {
            width: 25%;
            padding: 10px 0;
            display: flex;
          }
        }
        // 表格头三个按钮
        .research_echarts_box_table_nav {
          background-color: #fff;
          padding: 20px;
          display: flex;
          justify-content: space-between;
        }
        // 分页
        .research_echarts_box_table_Pagination {
          padding-top: 20px;
          display: flex;
          flex-direction: row-reverse;
        }
      }
    }
  }
}
</style>