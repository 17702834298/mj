<template>
  <div class="login_mainbox">
    <!-- 头部导航 -->
    <header class="container login_nav">
      <div class="container login_nav_box">
        <img src="#" alt="logo" />
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          style="width: 1200px; margin: 0 auto"
        >
          <el-menu-item index="1">产品功能</el-menu-item>
          <el-submenu index="2">
            <template slot="title">船长学院</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <!-- <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu> -->
          </el-submenu>
          <el-menu-item index="3">价格</el-menu-item>
          <el-menu-item index="4">服务市场</el-menu-item>
        </el-menu>
        <el-button type="primary" @click="clickLogin">登录</el-button>
      </div>
    </header>
    <main class="login_main">
      <!-- 轮播图 -->
      <el-carousel indicator-position="none" height="600px">
        <el-carousel-item v-for="item in banner" :key="item.index">
          <img :src="item.img" width="100%" />
        </el-carousel-item>
      </el-carousel>
      <!-- 卡片布局 -->
      <div style="background-color: #ccc; height: 100px">
        <div class="container">
          <el-row :gutter="20">
            <el-col :span="6"
              ><div class="grid-content bg-purple" style="display:flex;justify-content: center;align-items: center;font-weight: bolder;">海卖助手</div>
            </el-col>
            <el-col :span="6"
              ><div class="grid-content bg-purple" style="display:flex;justify-content: center;align-items: center;font-weight: bolder;">数据分析</div></el-col
            >
            <el-col :span="6"
              ><div class="grid-content bg-purple" style="display:flex;justify-content: center;align-items: center;font-weight: bolder;">精细化运营</div></el-col
            >
            <el-col :span="6"
              ><div class="grid-content bg-purple" style="display:flex;justify-content: center;align-items: center;font-weight: bolder;">跨境服务市场</div></el-col
            >
          </el-row>
        </div>
      </div>
      <!-- 销售业绩 -->
      <div class="container">
        <div style="text-align: center">
          <h2 style="font-size:30px;padding:10px 0">即时销售业绩</h2>
          <h5 style="padding:10px 0">多维度直观对比</h5>
        </div>
        <div>
          <div style="background-color: #ddd">
            <h5 style="padding-left: 190px;font-size:20px;font-weight: bolder;padding-top:10px">海卖助手</h5>
            <div
              style="
                display: flex;
                justify-content: space-around;
                align-items: center;
                padding:10px 0;
              "
            >
              <p>提供各店铺商品当天即时的订单量</p>
              <div>
                <el-button>详细功能</el-button>
                <el-button>视频解说</el-button>
              </div>
            </div>
            <img
              src="https://statics.captainbi.com/statics/bbs/amzcaptain/img/newHome/index3.png"
              width="1200px"
              alt="#"
            />
          </div>
        </div>
      </div>

      <!-- 运营工具 -->
      <div style="width: 100%; background-color: #ccc">
        <div class="container">
          <div style="text-align: center">
            <h2 style="font-size:30px;padding:10px 0">全能精细化运营工具</h2>
            <h5 style="padding:10px 0">高效运营，精准引流</h5>
          </div>
          <div>
            <div style="background-color: #ddd">
              <h5 style="padding-left: 190px;font-size:20px;font-weight: bolder;padding-top:10px">海卖助手</h5>
              <div
                style="
                  display: flex;
                  justify-content: space-around;
                  align-items: center;
                  padding:10px 0;
                "
              >
                <p>提供各店铺商品当天即时的订单量</p>
                <div>
                  <el-button>详细功能</el-button>
                  <el-button>视频解说</el-button>
                </div>
              </div>
              <img
                src="https://statics.captainbi.com/statics/bbs/amzcaptain/img/newHome/index5.png"
                width="1200px"
                alt="#"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- 更多服务 -->
      <div class="container" style="margin-bottom: 40px">
        <div style="text-align: center;padding:30px 0">
          <h2 style="padding:20px 0;font-size:40px">更多服务</h2>
          <div style="display: flex; justify-content: space-between">
            <!-- 左卡片 -->
            <div style="width: 580px; height:300px ">
              <el-card shadow="hover" style="width: 100%;height:50%;background-color:#02c3d8;color:#fff">
                <h3>VAT专业服务</h3>
                <p>一对一全方位专家级服务</p>
              </el-card>

              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  margin-top: 20px;
                  height:40%
                "
              >
                <el-card shadow="hover" style="width: 48%;background-color:#02c3d8;color:#fff">
                  <h3>VAT发票自动上传</h3>
                  <p>统计发票缺陷率</p>
                </el-card>
                <el-card shadow="hover" style="width: 48%;background-color:#02c3d8;color:#fff">
                  <h3>VAT发票自动上传</h3>
                  <p>统计发票缺陷率</p>
                </el-card>
              </div>
            </div>
            <!-- 右卡片 -->
            <div style="width: 580px; height:300px ">
              <el-card shadow="hover" style="width: 100%;height:50%;background-color:#02c3d8;color:#fff">
                <h3>VAT专业服务</h3>
                <p>一对一全方位专家级服务</p>
              </el-card>

              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  margin-top: 20px;
                  height:40%
                "
              >
                <el-card shadow="hover" style="width: 48%;background-color:#02c3d8;color:#fff">
                  <h3>VAT发票自动上传</h3>
                  <p>统计发票缺陷率</p>
                </el-card>
                <el-card shadow="hover" style="width: 48%;background-color:#02c3d8;color:#fff">
                  <h3>VAT发票自动上传</h3>
                  <p>统计发票缺陷率</p>
                </el-card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 卖家故事 -->
      <div
        style="
          width: 100%;
          height: 800px;
          background-color: #0f293f;
          color: #fff;
        "
      >
        <div style="text-align: center; padding: 20px">
          <h2 style="font-size:30px;padding:20px 0">30万+跨境企业正在使用船长BI</h2>
          <p style="padding:10px 0">满足各大站点，大中小规模卖家需求，你也能成为实力掌舵者</p>
        </div>

        <div class="container">
          <el-carousel
            :interval="5000"
            arrow="always"
            indicator-position="none"
            height="500px"
          >
            <el-carousel-item v-for="item in banner" :key="item.id">
              <img :src="item.img" width="100%" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>

      <!-- 服务商 -->
      <div style="width: 100%; height: 500px; background-color: #ccc">
        <div class="container">
          <div
            style="text-align: center; font-size: 40px; box-sizing: border-box"
          >
            <p style="margin: 0; padding: 40px">亚马逊服务商</p>
          </div>
          <div style="display: flex; justify-content: space-between">
            <el-card
              shadow="always"
              style="width: 32%; height: 200px; line-height: 200px"
            >
              <img
                src="https://statics.captainbi.com/statics/bbs/amzcaptain/img/newHome/provider1.png"
                alt="#"
              />
            </el-card>
            <el-card
              shadow="always"
              style="width: 32%; height: 200px; line-height: 200px"
            >
              <img
                src="https://statics.captainbi.com/statics/bbs/amzcaptain/img/newHome/provider2.png"
                alt="#"
              />
            </el-card>
            <el-card
              shadow="always"
              style="width: 32%; height: 200px; line-height: 200px"
            >
              <img
                src="https://statics.captainbi.com/statics/bbs/amzcaptain/img/newHome/provider3.png"
                alt="#"
              />
            </el-card>
          </div>
          <div style="text-align: center; margin-top: 40px">
            <el-button type="primary">立即查看</el-button>
          </div>
        </div>
      </div>

      <!-- 17大站点 -->
      <div style="background-color: #fff; width: 100%; height: 400px">
        <div class="container">
          <div
            style="text-align: center; font-size: 40px; box-sizing: border-box"
          >
            <p style="margin: 0; padding: 40px">17大站点，基础功能永久免费</p>
          </div>
          <div style="display: flex; justify-content: space-between">
            <div style="text-align: center" v-for="item in Site" :key="item.id">
              <img :src="item.img" alt="#" />
              <p>{{ item.name }}</p>
            </div>
          </div>
          <div style="text-align: center">
            <p style="margin:20px 0">即日起，注册船长BI即享受基础功能永久免费</p>

            <el-button type="primary" style="margin:20px">点击免费试用</el-button>
          </div>
        </div>
      </div>

      <!-- 新闻中心 -->
      <div style="background-color: #f3f6fa">
        <div
          style="text-align: center; font-size: 40px; box-sizing: border-box"
        >
          <p style="margin: 0; padding: 40px">船长新闻中心</p>
        </div>
        <div
          class="container"
          style="display: flex; justify-content: space-between"
        >
          <el-card
            shadow="always"
            style="width: 23%"
            v-for="obj in 4"
            :key="obj"
          >
            <div
              style="
                width: 100%;
                height: 120px;
                border-radius: 15px;
                background-color: #275e93;
                margin-bottom: 10px;
              "
            ></div>
            <a style="text-decoration: none; color: #000" href="#"
              >2021.08.18船长跨境电商日报</a
            >
            <div
              style="
                display: flex;
                justify-content: space-between;
                margin-top: 10px;
              "
            >
              <label>船长BI</label>
              <label>2021-08-18</label>
            </div>
          </el-card>
        </div>
        <div style="text-align: center; padding: 40px 0">
          <el-button type="primary">更多资讯</el-button>
        </div>
      </div>
    </main>

    <!-- 尾部   -->
    <footer class="login_foot">
      <div class="container">
        <div class="login_foot_box">
          <div>
            <img
              src="https://www.captainbi.com/amzcaptain/img/newHome/logo.png"
              alt="#"
            />
            <p style="color: #fff">让亚马逊运营更简单</p>
          </div>
          <div style="color: #fff;width:10%; text-align:center;">
            <p style="padding-left:8%;padding-bottom:20px">罗盘核心功能</p>
            <ul v-for="arr in LiList" :key="arr.name" style="list-style: none;">
              <li style="padding:10px 0">
                <a>{{ arr.name }}</a>
              </li>
            </ul>
          </div>
          <div style="color: #fff;width:10%">
            <p style="padding-left:8%;padding-bottom:20px">服务与支持</p>
            <ul v-for="arr in support" :key="arr.name" style="list-style: none">
              <li style="padding:10px 0">
                <a>{{ arr.name }}</a>
              </li>
            </ul>
          </div>
          <div style="color: #fff">
            <p style="padding-bottom:20px">联系我们</p>
            <ul v-for="arr in connect" :key="arr.name" style="list-style: none">
              <li style="padding:5px 0">
                <label>{{ arr.name }}</label
                >：<label>{{ arr.obj }}</label>
              </li>
            </ul>
          </div>
          <div>
            <img
              src="https://www.captainbi.com/amzcaptain/img/newHome/code.png"
              alt="#"
            />
            <p style="color: #fff">扫码关注公众号</p>
          </div>
        </div>
        <div>
          <ul class="footer_nav">
            <li>友情链接：</li>
            <li v-for="nav in footnav" :key="nav.name">
              <a href="#">{{ nav.name }}</a>
            </li>
          </ul>
        </div>
        
      </div>
      <div class="footer_buttom">
          <h5>成都米加科技有限公司</h5>
        </div>
    </footer>
  </div>
</template>

<script>
import {login} from "@/apis/admin"
export default {
  data() {
    return {
      activeIndex: "1",
      banner: [
        {
          id: 10,
          img: "https://tse3-mm.cn.bing.net/th/id/OIP-C.eWPWu4ZYdVsfHwigrYyWPgHaFX?w=293&h=211&c=7&o=5&pid=1.7",
        },
        {
          id: 20,
          img: "https://tse4-mm.cn.bing.net/th/id/OIP-C.whHWP0ml_odOYVGZJGAwnwHaDb?w=304&h=162&c=7&o=5&pid=1.7",
        },
        {
          id: 30,
          img: "https://tse1-mm.cn.bing.net/th/id/OIP-C.243xci7bl1oM52WNoWuA6wHaE8?w=270&h=180&c=7&o=5&pid=1.7",
        },
      ],
      Site: [
        {
          id: -1,
          name: "美国",
          img: "https://statics.captainbi.com/statics/bbs/amzcaptain/img/newHome/EM.png",
        },
        {
          id: -2,
          name: "加拿大",
          img: "https://statics.captainbi.com/statics/bbs/amzcaptain/img/newHome/CA.png",
        },
        {
          id: -3,
          name: "墨西哥",
          img: "https://statics.captainbi.com/statics/bbs/amzcaptain/img/newHome/MX.png",
        },
        {
          id: -4,
          name: "德国",
          img: "https://statics.captainbi.com/statics/bbs/amzcaptain/img/newHome/DE.png",
        },
        {
          id: -5,
          name: "西班牙",
          img: "https://statics.captainbi.com/statics/bbs/amzcaptain/img/newHome/ES.png",
        },
        {
          id: -6,
          name: "法国",
          img: "https://statics.captainbi.com/statics/bbs/amzcaptain/img/newHome/FR.png",
        },
        {
          id: -7,
          name: "意大利",
          img: "https://statics.captainbi.com/statics/bbs/amzcaptain/img/newHome/IT.png",
        },
        {
          id: -8,
          name: "英国",
          img: "https://statics.captainbi.com/statics/bbs/amzcaptain/img/newHome/UK.png",
        },
        {
          id: -9,
          name: "印度",
          img: "https://statics.captainbi.com/statics/bbs/amzcaptain/img/newHome/IN.png",
        },
        {
          id: -10,
          name: "日本",
          img: "https://statics.captainbi.com/statics/bbs/amzcaptain/img/newHome/JP.png",
        },
        {
          id: -11,
          name: "澳大利亚",
          img: "https://statics.captainbi.com/statics/bbs/amzcaptain/img/newHome/AU.png",
        },
        {
          id: -12,
          name: "巴西",
          img: "https://statics.captainbi.com/statics/bbs/amzcaptain/img/newHome/BR.png",
        },
        {
          id: -13,
          name: "土耳其",
          img: "https://statics.captainbi.com/statics/bbs/amzcaptain/img/newHome/TR.png",
        },
        {
          id: -14,
          name: "阿联酋",
          img: "https://statics.captainbi.com/statics/bbs/amzcaptain/img/newHome/AE.png",
        },
      ],
      LiList: [
        { name: "销售管理" },
        { name: "海卖助手" },
        { name: "客服管理" },
        { name: "财务/VAT" },
        { name: "FBA库存" },
      ],
      support: [{ name: "关于我们" }, { name: "常见问题" }],
      connect: [
        { name: "售后电话", obj: "400-600-8837" },
        { name: "服务时间", obj: "周一至周六9:00-12:00 13:30-18:00" },
        { name: "邮箱地址", obj: "linziming@captainbi.com" },
        { name: "商务合作", obj: "18063788581" },
        {
          name: "总部地址",
          obj: "深圳市南山区桃源街道塘朗社区塘长路田寮大厦1003-1012",
        },
      ],
      footnav: [
        { name: "船长BI" },
        { name: "VAT申请" },
        { name: "海卖助手" },
        { name: "创蓝论坛" },
        { name: "出海合作" },
        { name: "大森林全球物流" },
        { name: "独立站" },
        { name: "三态速递" },
        { name: "邦阅网" },
        { name: "网易跨境收款" },
        { name: "亚马逊运营培训" },
        { name: "国际货代" },
        { name: "通用运费网" },
        { name: "更多链接" },
      ],
    };
  },
  methods:{
    // 登录
    clickLogin(){
      login({})
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 1200px;
  margin: 0 auto;
  text-align:center;
  
}

.login_mainbox {
  width: 100%;
  .login_nav {
    width: 100%;
    .login_nav_box {
      display: flex;
      justify-content: space-around;
    }
  }
  .login_main {
    width: 100%;
  }
  .login_foot {
    width: 100%;
  }
}
// 尾部

.login_foot {
  background-color: #0f293f;
  .login_foot_box {
    padding: 20px 0;
    display: flex;
    
    justify-content: space-between;
  }

  .footer_nav {
    list-style: none;
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    a {
      text-decoration: none;
      color: #fff;
    }
  }
  .footer_buttom{
    font-size: 14px;
    height: 40px;
    text-align: center;
    padding: 10px;
    color: #fff;
    background-color: #062036;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

a:hover {
  color: deepskyblue !important;
}

// 轮播图样式
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}


// 布局
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}

.bg-purple {
  background: #fff;
}

.grid-content {
  border-radius: 4px;
  min-height: 80px;
  position: relative;
  top: -20px;
  z-index: 999;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>