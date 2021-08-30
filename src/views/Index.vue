<template>
  <div class="index_main">
    <!-- 最上层表格盒子 -->
    <div class="index_main_topbox">
      <!-- 线型图 -->
      <el-card shadow="always" style="width: 40%">
        <div id="bars" :style="{ width: '100%', height: '300px' }">
          <div class="towbox_Sales">
            <div class="towbox_Sales_data">
              <p>销售额</p>
              <p style="color: red; font-size: 18px">0.00</p>
              <p>昨日<label>0</label></p>
            </div>
            <div class="towbox_Sales_data">
              <p>销售额</p>
              <p style="color: red; font-size: 18px">0.00</p>
              <p>昨日<label>0</label></p>
            </div>
            <div class="towbox_Sales_data">
              <p>销售额</p>
              <p style="color: red; font-size: 18px">0.00</p>
              <p>昨日<label>0</label></p>
            </div>
            <div class="towbox_Sales_data">
              <p>销售额</p>
              <p style="color: red; font-size: 18px">0.00</p>
              <p>昨日<label>0</label></p>
            </div>
            <div class="towbox_Sales_data">
              <p>销售额</p>
              <p style="color: red; font-size: 18px">0.00</p>
              <p>昨日<label>0</label></p>
            </div>
          </div>
          <div id="onebars" :style="{ width: '100%', height: '220px' }"></div>
        </div>
      </el-card>

      <!-- 饼状图 -->
      <el-card shadow="always" style="width: 28%">
        <div id="main" :style="{ width: '100%', height: '300px' }"></div>
      </el-card>

      <!-- 标签切换 -->
      <el-card shadow="always" style="width: 28%">
        <div id="tableSwitch" style="width: 100%">
          <el-tabs
            style="width: 100%"
            v-model="activeName"
            @tab-click="handleClick"
          >
            <el-tab-pane label="用户管理" name="first">
              <el-table :data="UserData" style="width: 100%">
                <el-table-column prop="name" label="商品"> </el-table-column>
                <el-table-column prop="asn" label="ASN"> </el-table-column>
                <el-table-column prop="sales" label="商品销售额">
                </el-table-column>
                <el-table-column prop="salesvolume" label="销售量">
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">
              <el-table :data="Configuration" style="width: 100%">
                <el-table-column prop="name" label="商品"> </el-table-column>
                <el-table-column prop="asn" label="ASN"> </el-table-column>
                <el-table-column prop="sales" label="商品销售额">
                </el-table-column>
                <el-table-column prop="salesvolume" label="销售量">
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="角色管理" name="third">
              <el-table :data="RoleData" style="width: 100%">
                <el-table-column prop="name" label="商品"> </el-table-column>
                <el-table-column prop="asn" label="ASN"> </el-table-column>
                <el-table-column prop="sales" label="商品销售额">
                </el-table-column>
                <el-table-column prop="salesvolume" label="销售量">
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-card>
    </div>

    <!-- 第二层表格盒子 -->
    <div class="index_main_towbox">
      <!-- 线型图 -->
      <el-card shadow="always" style="width: 40%">
        <div id="towbars" :style="{ width: '100%', height: '300px' }">
          <div class="towbox_Sales">
            <div class="towbox_Sales_data">
              <p>销售额</p>
              <p style="color: red; font-size: 18px">0.00</p>
              <p>昨日<label>0</label></p>
            </div>
            <div class="towbox_Sales_data">
              <p>销售额</p>
              <p style="color: red; font-size: 18px">0.00</p>
              <p>昨日<label>0</label></p>
            </div>
            <div class="towbox_Sales_data">
              <p>销售额</p>
              <p style="color: red; font-size: 18px">0.00</p>
              <p>昨日<label>0</label></p>
            </div>
            <div class="towbox_Sales_data">
              <p>销售额</p>
              <p style="color: red; font-size: 18px">0.00</p>
              <p>昨日<label>0</label></p>
            </div>
            <div class="towbox_Sales_data">
              <p>销售额</p>
              <p style="color: red; font-size: 18px">0.00</p>
              <p>昨日<label>0</label></p>
            </div>
          </div>
          <div id="towbarss" :style="{ width: '100%', height: '220px' }"></div>
        </div>
      </el-card>

      <!-- 绩效 -->
      <el-card shadow="always" style="width: 28%">
        <div id="towmain" :style="{ width: '100%', height: '300px' }">
          <!-- 左边盒子 -->
          <!-- <el-card shadow="always"> -->
          <div class="towmain_left">
            <h5>今日跟卖</h5>
            <div class="towmain_left_material">
              <p style="font-size: 12px">被跟卖商品数</p>
              <p>0</p>
              <div class="Sell_today">
                <p style="font-size: 12px">昨日</p>
                <p>0</p>
              </div>
            </div>
          </div>
          <!-- </el-card> -->
          <!-- 右边盒子 -->
          <!-- <el-card shadow="always"> -->
          <div class="towmain_right">
            <h5>店铺绩效</h5>
            <div class="towmain_right_material">
              <div>
                <p style="font-size: 14px">订单缺陷率</p>
                <p style="font-size: 14px; color: #ccc">目标：低于1%</p>
              </div>
              <p style="color: #8dd2f8"><label>-</label>%</p>
            </div>
          </div>
          <!-- </el-card> -->
        </div>
      </el-card>

      <!-- 库存 -->
      <el-card shadow="always" style="width: 28%">
        <div id="towright" :style="{ width: '100%', height: '300px' }">
          <div class="towright_top">
            <h5>库存状况</h5>
            <div style="display: flex; justify-content: space-between">
              <div style="width: 30%">
                <p>需要的数量</p>
                <p>0</p>
                <div style="display: flex; justify-content: space-between">
                  <p>昨日</p>
                  <p>0</p>
                </div>
              </div>
              <div style="width: 30%">
                <p>需要的数量</p>
                <p>0</p>
                <div style="display: flex; justify-content: space-between">
                  <p>昨日</p>
                  <p>0</p>
                </div>
              </div>
              <div style="width: 30%">
                <p>需要的数量</p>
                <p>0</p>
                <div style="display: flex; justify-content: space-between">
                  <p>昨日</p>
                  <p>0</p>
                </div>
              </div>
            </div>
          </div>
          <div class="towright_bottom"></div>
        </div>
      </el-card>
    </div>

    <!-- 第三层盒子 -->
    <div class="index_main_threebox">
      <!-- 图片 -->
      <el-card shadow="always" style="width: 28%">
        <div id="threemain" :style="{ width: '100%', height: '300px' }">
          <div class="block">
            <span class="demonstration">默认 Hover 指示器触发</span>
            <el-carousel height="150px">
              <el-carousel-item v-for="item in banner" :key="item.id">
                <img
                  :src="item.link"
                  :alt="item.desc"
                  width="100%"
                  height="300px"
                />
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </el-card>

      <!-- 更新公告 -->
      <el-card shadow="always" style="width: 40%">
        <div id="threebars" :style="{ width: '100%', height: '300px' }">
          <h5>公告和更新日志</h5>
          <ul style="list-style: none; padding-inline-start: 0">
            <li>
              <a
                href="#"
                style="
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  text-decoration: none;
                  color: #000;
                  padding: 10px 10px;
                "
              >
                <label>【更新】本次更新内容</label>
                <div style="display: flex">
                  <label>2021-01-01 15:22:41</label>
                  <label>&gt;</label>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                style="
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  text-decoration: none;
                  color: #000;
                  padding: 10px 10px;
                "
              >
                <label>【更新】本次更新内容</label>
                <div style="display: flex">
                  <label>2021-01-01 15:22:41</label>
                  <label>&gt;</label>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                style="
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  text-decoration: none;
                  color: #000;
                  padding: 10px 10px;
                "
              >
                <label>【更新】本次更新内容</label>
                <div style="display: flex">
                  <label>2021-01-01 15:22:41</label>
                  <label>&gt;</label>
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                style="
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  text-decoration: none;
                  color: #000;
                  padding: 10px 10px;
                "
              >
                <label>【更新】本次更新内容</label>
                <div style="display: flex">
                  <label>2021-01-01 15:22:41</label>
                  <label>&gt;</label>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </el-card>

      <!-- 管理 -->
      <el-card shadow="always" style="width: 28%">
        <div id="threemanage" :style="{ width: '100%', height: '300px' }">
          <div class="threemanage_one">
            <h5 style="padding-left: 16px">账号管理</h5>
            <div class="threemanage_one_top">
              <div class="threemanage_left">
                <p>已授权运营店铺</p>
                <div class="threemanage_left_add">
                  <label>0</label>
                  <label>+添加</label>
                </div>
              </div>

              <div class="threemanage_right">
                <p>已授权CPC店铺</p>
                <div class="threemanage_right_add">
                  <label>0</label>
                  <label>+添加</label>
                </div>
              </div>
            </div>
          </div>
          <div class="threemanage_tow">
            <h5 style="padding-left: 16px">客服邮件</h5>
            <div class="threemanage_one_top">
              <div class="threemanage_left">
                <p>已授权运营店铺</p>
                <div class="threemanage_left_add">
                  <label>0</label>
                  <label>+添加</label>
                </div>
              </div>

              <div class="threemanage_right">
                <p>已授权CPC店铺</p>
                <div class="threemanage_right_add">
                  <label>0</label>
                  <label>+添加</label>
                </div>
              </div>
            </div>
          </div>
          <div class="threemanage_three">
            <h5 style="padding-left: 16px">近7日中差评</h5>
            <div class="threemanage_one_top">
              <div class="threemanage_left">
                <p>已授权运营店铺</p>
                <div class="threemanage_left_add">
                  <label>0</label>
                  <label>+添加</label>
                </div>
              </div>

              <div class="threemanage_right">
                <p>已授权CPC店铺</p>
                <div class="threemanage_right_add">
                  <label>0</label>
                  <label>+添加</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { banners } from "@/apis/banner";
import * as echarts from "echarts";
export default {
  data() {
    return {
      activeName: "second",
      UserData: [{ name: "名字", asn: 111, sales: 1451, salesvolume: 14111 }], //用户管理表格
      Configuration: [
        { name: "名字", asn: 222, sales: 1451, salesvolume: 14111 },
      ], //配置管理表格
      RoleData: [{ name: "名字", asn: 333, sales: 1451, salesvolume: 14111 }], //角色管理表格
      banner: [], //banner图
    };
  },
  mounted() {
    // 调用banner接口
    this.bannerList();
    this.oneinit();
    this.oneint();
    this.towinit();
  },
  methods: {
    // 获取banner
    bannerList() {
      banners({}).then((res) => {
        if (res.data.code == 0 && res.data.error == "") {
          this.banner = res.data.items.data;
          console.log("banner",this.banner);
        } else {
          console.log(res.data.error);
        }
      });
    },
    // 第一层线型图
    oneinit() {
      var chartDom = document.getElementById("onebars");
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {},
          },
        ],
      };

      option && myChart.setOption(option);
    },

    // 第一层饼状图
    oneint() {
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      var option;

      option = {
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
            radius: ["40%", "60%"],
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
                fontSize: "20",
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
            ],
          },
        ],
      };

      option && myChart.setOption(option);
    },

    // 第一层标签切换
    handleClick(tab, event) {
      console.log(tab, event);
    },

    // 第二层线型图
    towinit() {
      var chartDom = document.getElementById("towbarss");
      var myChart = echarts.init(chartDom);
      var option;
      option = {
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {},
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<style lang="less" scoped>
html,
body,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
}
.index_main {
  // flex: 1;
  background-color: #f1f3f6;
  padding: 20px;
  // overflow: scroll;
  // 第一层盒子
  .index_main_topbox {
    display: flex;
    justify-content: space-around;
    #bars,
    #main,
    #tableSwitch {
      background-color: #fff;
    }
    #bars {
      .towbox_Sales {
        height: 80px;
        display: flex;
        justify-content: space-around;
        .towbox_Sales_data {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
      }
    }
  }
  // 第二层盒子
  .index_main_towbox {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    #towbars {
      background-color: #fff;
      .towbox_Sales {
        height: 80px;
        display: flex;
        justify-content: space-around;
        .towbox_Sales_data {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
      }
    }
    #towmain {
      display: flex;
      justify-content: space-between;
      background-color: #f1f3f6;

      .towmain_left {
        width: 48%;
        background-color: #fff;
        box-sizing: border-box;
        padding: 0 10px;
        .towmain_left_material {
          .Sell_today {
            display: flex;
            justify-content: space-between;
          }
        }
      }
      .towmain_right {
        width: 48%;
        background-color: #fff;
        box-sizing: border-box;
        padding: 0 10px;
        .towmain_right_material {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      }
    }
    #towright {
      background-color: #f1f3f6;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .towright_top {
        flex: 0.35;
        background-color: #fff;
      }
      .towright_bottom {
        flex: 0.6;
        background-color: #fff;
      }
    }
  }
  // 第三层盒子
  .index_main_threebox {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    #threebars {
      background-color: #fff;
      overflow: scroll;
      li :hover {
        background-color: #eee;
      }
    }
    #threemanage {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: #f1f3f6;
      .threemanage_one {
        flex: 0.32;
        background-color: #fff;
        .threemanage_one_top {
          flex: 1;
          display: flex;
          justify-content: space-around;
          .threemanage_left {
            width: 45%;
            height: 80px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .threemanage_left_add {
              display: flex;
              justify-content: space-between;
            }
          }
          .threemanage_right {
            width: 45%;
            height: 80px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .threemanage_right_add {
              display: flex;
              justify-content: space-between;
            }
          }
        }
      }
      .threemanage_tow {
        flex: 0.32;
        background-color: #fff;
        .threemanage_one_top {
          flex: 1;
          display: flex;
          justify-content: space-around;
          .threemanage_left {
            width: 45%;
            height: 80px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .threemanage_left_add {
              display: flex;
              justify-content: space-between;
            }
          }
          .threemanage_right {
            width: 45%;
            height: 80px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .threemanage_right_add {
              display: flex;
              justify-content: space-between;
            }
          }
        }
      }
      .threemanage_three {
        flex: 0.32;
        background-color: #fff;
        .threemanage_one_top {
          flex: 1;
          display: flex;
          justify-content: space-around;
          .threemanage_left {
            width: 45%;
            height: 80px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .threemanage_left_add {
              display: flex;
              justify-content: space-between;
            }
          }
          .threemanage_right {
            width: 45%;
            height: 80px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .threemanage_right_add {
              display: flex;
              justify-content: space-between;
            }
          }
        }
      }
    }
    // banner样式
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
  }
}
</style>