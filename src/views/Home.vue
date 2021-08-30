<template>
  <div class="home_main">
    <!-- 导航左 -->
    <div class="home_nav_left">
      <!-- 左侧导航 -->
      <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group -->
      <el-menu
        @select="selectbread"
        :default-active="curactive"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        router
        unique-opened
        v-for="item in homeNav"
        :key="item.name"
      >
        <el-submenu v-if="item.children" :index="item.index">
          <template slot="title">
            <i :class="item.i"></i>
            <span slot="title">{{ item.name }}</span>
          </template>

          <el-menu-item-group
            style="width: 100px"
            v-for="obj in item.children"
            :key="obj.name"
          >
            <!-- <span slot="title">分类</span> -->
            <el-menu-item :index="obj.index">{{ obj.name }}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-menu-item v-else :index="item.index">
          <i :class="item.i"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
      </el-menu>
    </div>

    <!-- 出口 -->
    <div class="home_body">
      <!-- 导航右 -->
      <div class="home_title_info">
        <div class="home_nav_right" style="background-color: #52c6d9">
          <div>
            <el-breadcrumb>
              <el-breadcrumb-item v-for="item in breadlist" :key="item">{{
                item
              }}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
        <div class="home_nav_right_info">
          <p @click="clickImg()">欢迎您：{{ name }}</p>
          <!-- <img
            @click="clickImg"
            src="https://tse2-mm.cn.bing.net/th/id/OIP-C.o9F0LZlXmWriP10VfI1QwgAAAA?w=180&h=180&c=7&o=5&pid=1.7"
            alt="img"
          /> -->
        </div>
      </div>
      <!-- overflow: scroll -->
      <div class="home_nav_right_Export">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "", //账号
      isCollapse: true, //导航收起
      activeIndex: "/Home/index", //导航index值
      homeNav: [
        {
          name: "首页",
          index: "/Home/index",
          bread: ["首页"],
          i: "el-icon-s-home",
        },
        {
          name: "客户数据",
          index: "/Home/Storeprofit",
          bread: ["客户数据"],
          i: "el-icon-s-custom",
          /* children: [
            {
              index: "/Home/Storeprofit",
              name: "客户数据",
              bread: ["客户管理", "客户数据"],
            },
          ], */
        },
        {
          name: "订单管理",
          index: "/Home/Trade",
          bread: ["订单管理"],
          i: "el-icon-s-order",
          /* children: [
            {
              index: "/Home/Trade",
              name: "订单列表",
              bread: ["订单管理", "订单列表"],
            },
            {
              index: "/Home/OperationDetails",
              name: "订单详情",
              bread: ["订单管理", "订单详情"],
            },
          ], */
        },
        {
          name: "任务列表",
          index: "/Home/Mailhandling",
          bread: "任务列表",
          i: "el-icon-s-operation",
          /* children: [
            {
              index: "/Home/Mailhandling",
              name: "任务池",
              bread: ["任务列表", "任务池"],
            },
            {
              index: "/Home/AdminList",
              name: "管理员列表",
              bread: ["管理员", "管理员列表"],
            },
            {
              index: "/Home/RoleList",
              name: "角色列表",
              bread: ["管理员", "角色列表"],
            },
            {
              index: "/Home/Mailhandling",
              name: "邮件管理",
              bread: ["管理员", "邮件管理"],
            },
          ], */
        },
        {
          name: "流水管理",
          index: "/Home/OperationDetails",
          bread: ["流水管理"],
          i: "el-icon-coin",
          /* children: [
            {
              index: "/Home/OperationDetails",
              name: "金币流水",
              bread: ["流水管理", "金币流水"],
            },
            {
              index: "/Home/Trade",
              name: "订单列表",
              bread: ["客户", "订单列表"],
            },
            {
              index: "/Home/ReceiptRecord",
              name: "回款记录",
              bread: ["客户", "回款记录"],
            },
            {
              index: "/Home/OperationDetails",
              name: "运营费用详情",
              bread: ["客户", "运营费用详情"],
            },
          ], */
        },
        {
          name: "管理员",
          index: "5",
          bread: ["首页"],
          i: "el-icon-connection",
          children: [
            {
              index: "/Home/AuthorityList",
              name: "权限列表",
              bread: ["管理员", "权限列表"],
            },
            {
              index: "/Home/AdminList",
              name: "管理员列表",
              bread: ["管理员", "管理员列表"],
            },
            {
              index: "/Home/RoleList",
              name: "角色列表",
              bread: ["管理员", "角色列表"],
            },
          ],
        },
        {
          name: "系统设置",
          index: "/Home/SystemSettings",
          bread: ["系统设置"],
          i: "el-icon-setting",
          /*children: [
            {
              index: "/Home/SystemSettings",
              name: "系统配置",
              bread: ["系统设置", "系统配置"],
            }, 
             {
              index: "/Home/Test",
              name: "测试",
              bread: ["管理员", "测试"],
            }, */
          /*{
              index: "/Home/RoleList",
              name: "角色列表",
              bread: ["管理员", "角色列表"],
            }, 
          ],*/
        } /* 
        { name: "财务统计", index: "7", bread: ["首页"], i: "el-icon-s-data" },
        {
          name: "选品",
          index: "/Home/Research",
          bread: ["首页"],
          i: "el-icon-search",
        }, */,
      ],
      breadlist: [], //面包屑标题
      curactive: "", //面包屑默认标题
    };
  },
  created() {
    this.name = localStorage.name;
    // 默认获取页面地址
    this.curactive = location.hash.replace("#", "");
    // 面包屑默认表头
    this.selectbread(this.curactive);

    // 判断角色登录权限    截取部分菜单
    /* if (localStorage.role == "normal") {
      this.treelist.splice(3);
    } */
  },
  methods: {
    selectbread(index) {
      for (const obj of this.homeNav) {
        if (obj.children) {
          for (const item of obj.children) {
            if (item.index == index) {
              this.breadlist = item.bread;
            }
          }
        } else {
          if (obj.index == index) {
            this.breadlist = obj.bread;
          }
        }
      }
    },
    // 点击头像跳转到管理员页
    clickImg() {
      this.$router.push("/Home/UserInfo");
    },
  },
};
</script>

<style lang="less">
.el-menu--collapse .el-menu .el-submenu,
.el-menu--popup {
  min-width: 0;
}
.home_main {
  width: 100%;
  height: 100%;
  display: flex;
  .home_nav_left {
    height: 100%;
  }
  .home_body {
    flex: 1;
    display: flex;
    flex-direction: column;
    // width: 100%;
    // overflow: scroll;

    // padding-top: 60px;
    .home_title_info {
      width: 100%;
      height: 60px;
      background-color: #52c6d9;
      color: #fff;
      display: flex;
      justify-content: space-between;
      .home_nav_right {
        // width: 100%;
        height: 60px;
        padding-left: 25px;
        display: flex;
        align-items: center;
        position: relative;
        background-color: #fff;
        z-index: 9;

        .el-breadcrumb__inner {
          color: #fff !important;
        }
        .el-breadcrumb {
          width: 100%;
          color: #fff !important;
        }
      }
      .home_nav_right_info {
        width: 15%;
        padding-right: 30px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        // position: relative;
        // z-index: 10;
        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }
      }
    }
    .home_nav_right_Export {
      flex: 1;
      overflow: scroll;
    }
  }
}
</style>
