<template>
  <div class="Mailhandling_body">
    <!-- 头部 -->
    <div class="Mailhandling_header">
      <!-- 左部 -->
      <div class="Mailhandling_header_left">
        <!-- <h2>任务池</h2> -->

        <!-- <el-date-picker
          v-model="dateValue"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          size="mini"
        >
        </el-date-picker> -->
      </div>
      <!-- 右部 -->
      <!-- <div class="Mailhandling_header_right">
        <div class="Mailhandling_header_right_top">
          <div class="Mailhandling_header_right_one">
            <div>昨天发送0</div>
            <div>近7日发送0</div>
          </div>
          <div class="Mailhandling_header_right_tow">
            <div>您剩余200封邮件</div>
            <a>去购买</a>
          </div>
          <div style="margin-top: 15px">
            <el-input
              placeholder="请输入内容"
              v-model="inputValue"
              class="input-with-select"
              style="width: 300px"
              size="mini"
            >
              <el-select v-model="select" slot="prepend" placeholder="请选择">
                <el-option label="餐厅名" value="1"></el-option>
                <el-option label="订单号" value="2"></el-option>
                <el-option label="用户电话" value="3"></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </div>
        <div class="Mailhandling_header_right_buttom">
          <a href="#">索评助手插件版 重磅上线!</a>
        </div>
      </div> -->
    </div>

    <!-- 活动板块 -->
    <!-- <div class="Mailhandling_Sidebar">
      左部
      <div class="Mailhandling_Sidebar_left">
        <div class="Mailhandling_Sidebar_left_title">AI智能活动</div>
        <div class="Mailhandling_Sidebar_left_data">
          <div
            class="Mailhandling_Sidebar_left_data_box"
            v-for="item in 4"
            :key="item"
          >
            <i class="el-icon-edit"></i>
            <div>
              <h2 style="font-weight: bolder; font-size: 20px">索取评价</h2>
              <p style="font-size: 14px; color: #aaa">低成本索取评价</p>
            </div>
            <el-button type="primary" size="mini">创建</el-button>
          </div>
        </div>
      </div>
      右部
      <div class="Mailhandling_Sidebar_right">
        <div class="Mailhandling_Sidebar_right_title">手动活动</div>
        <div class="Mailhandling_Sidebar_right_data">
          <div
            class="Mailhandling_Sidebar_right_data_box"
            v-for="item in 4"
            :key="item"
          >
            <i class="el-icon-edit"></i>
            <div>
              <h2 style="font-weight: bolder; font-size: 20px">分组发件</h2>
              <p style="font-size: 14px; color: #aaa">对分组客户精准发件</p>
            </div>
            <el-button type="primary" size="mini">创建</el-button>
          </div>
        </div>
      </div>
    </div> -->

    <!-- 主体 -->
    <div class="Mailhandling_main">
      <div class="Mailhandling_main_tab">
        <el-tabs v-model="activeName" style="text-algin: center">
          <el-tab-pane label="任务池" name="second">
            <div class="Mailhandling_main_tab_left">
              <!-- 选择器 -->
             <!--  <div>
                <el-dropdown>
                  <el-button
                    
                    plain
                    @click="clickStart"
                    >启动任务</el-button
                  >
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>test</el-dropdown-item>
                  </el-dropdown-menu>
                  <el-button type="primary" style="background-color:#52c6d9;color:#fff;border:0;">
                    启动任务
                  </el-button>
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </el-dropdown>
              </div> -->

              <!-- 表格 -->
              <div>
                <el-table
                  :data="tableData"
                  style="width: 100%"
                  highlight-current-row
                >
                  <el-table-column prop="created_at" label="创建时间">
                  </el-table-column>
                  <el-table-column prop="id" label="id"> </el-table-column>
                  <el-table-column prop="order_no" label="订单号">
                  </el-table-column>
                  <el-table-column prop="priority" label="优先级">
                  </el-table-column>
                  <el-table-column prop="quantity" label="任务量">
                  </el-table-column>
                  <el-table-column prop="progress" label="任务进展量">
                    <template slot-scope="scope">
                      <el-progress :percentage="scope.row.progress"></el-progress>
                    </template>
                  </el-table-column>
                  <el-table-column prop="tags" label="标签"> </el-table-column>
                  <el-table-column prop="status" label="状态">
                  </el-table-column>
                  <el-table-column prop="address" label="操作">
                    <template slot-scope="scope">
                      <el-button @click="clickBtn(scope.row)" style="background-color: #52c6d9; color: #fff">启动任务</el-button>
                    </template>
                  </el-table-column>
                  <!-- <el-table-column prop="address" label="状态">
                  </el-table-column>
                  <el-table-column prop="address" label="最后更改时间">
                  </el-table-column>
                  <el-table-column prop="address" label="创建人">
                  </el-table-column>
                  <el-table-column prop="address" label="操作">
                  </el-table-column> -->
                </el-table>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
        <div class="Pagination">
          <el-pagination
            @size-change="sizechange"
            @current-change="pagechange"
            :current-page="curpage"
            :page-size="curpagesize"
            layout="total,prev,pager,next,jumper"
            :total="Total"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { tasksStart, tasks } from "@/apis/Task";
export default {
  data() {
    return {
      activeName: "second", //tab切换
     
      tableData: [], //任务池数据
      token: "", //登录获取的token
      id: "", //任务id
      curpage: 1, //分页
      curpagesize: 10, // 每页显示数量
      Total: 50, //总页数
      // progress:0, //任务进展量
    };
  },
  created() {
    this.token = localStorage.token;
    this.id = localStorage.id;
    // 调用任务池接口
    this.tasksList();
  },
  methods: {
    
    // 任务池
    tasksList() {
      tasks({ Authorization: this.token,page_number: this.curpage, }).then((res) => {
        console.log("任务池===>", res);
        this.tableData = res.data.items.data;
        /* this.progress = res.data.items.data.progress
        for (const i of res.data.items.data) {
          console.log(i.progress);
          this.progress = i.progress
        } */
        // console.log(this.progress);
        // 当前页
        this.Total = res.data.items.total;
        // 显示条数
        this.curpagesize = res.data.items.per_page;
      });
    },
    // 启动任务按钮
    clickBtn(row){
      tasksStart({ Authorization: this.token, order_id: row.id }).then(
        (res) => {
          // console.log("启动任务===>", res);
          this.tableData.status = res.data.items
          // console.log(this.tableData.status);
          //  console.log(row.id,this.tableData);
        }
      );
    },
    // 分页器事件
    // 当前页显示多少条数据
    sizechange(value) {
      this.curpagesize = value;
      console.log(this.curpagesize);
      this.tasksList();
    },
    // 当前显示页数
    pagechange(value) {
      this.curpage = value;
      console.log(this.curpage);
      this.tasksList();
    },
  },
};
</script>

<style lang="less" scoped>
.Mailhandling_body {
  background-color: #f0f0f0;
  padding: 20px;

  //   头部
  .Mailhandling_header {
    display: flex;
    justify-content: space-between;
    .Mailhandling_header_left {
      h2 {
        padding: 10px 0;
        font-size: 28px;
      }
      width: 45%;
    }
    .Mailhandling_header_right {
      width: 45%;

      .Mailhandling_header_right_top {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-top: 10px;
        .Mailhandling_header_right_one {
          width: 200px;
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          background-color: #fff;
          display: flex;
          justify-content: space-around;
        }
        .Mailhandling_header_right_tow {
          width: 200px;
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          background-color: #fff;
          display: flex;
          justify-content: space-around;
          a {
            color: deepskyblue;
          }
        }
      }
      .Mailhandling_header_right_buttom {
        padding: 20px 10px;
        display: flex;
        justify-content: flex-end;
        a {
          text-decoration: none;
          color: deepskyblue;
        }
        a:hover {
          text-decoration: underline;
        }
      }
    }
  }
  //   活动
  .Mailhandling_Sidebar {
    display: flex;
    justify-content: space-between;
    // 左部
    .Mailhandling_Sidebar_left {
      width: 48%;
      height: 185px;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      border-radius: 10px;
      .Mailhandling_Sidebar_left_title {
        width: 20px;
        padding: 32px;
        background-color: #78bbf3;
        color: #fff;
        font-weight: bolder;
        border-radius: 10px 0 0 10px;
      }
      .Mailhandling_Sidebar_left_data {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        .Mailhandling_Sidebar_left_data_box {
          width: 48%;
          height: 48%;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
      }
    }
    // 右部
    .Mailhandling_Sidebar_right {
      width: 48%;
      height: 185px;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      border-radius: 10px;
      .Mailhandling_Sidebar_right_title {
        width: 20px;
        padding: 32px;
        background-color: #f2726f;
        color: #fff;
        font-weight: bolder;
        border-radius: 10px 0 0 10px;
      }
      .Mailhandling_Sidebar_right_data {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        .Mailhandling_Sidebar_right_data_box {
          width: 48%;
          height: 48%;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
      }
    }
  }
  // 主体
  .Mailhandling_main {
    flex: 1;
    background-color: #fff;
    margin-top: 20px;
    border-radius: 15px;
    .Mailhandling_main_tab {
      /* display: flex;
      justify-content: center; */
      padding: 20px;

      .Mailhandling_main_tab_left {
        width: 100%;
        display: flex;
        flex-direction: column;
      }
    }
  }
  .Pagination{
    padding: 10px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>