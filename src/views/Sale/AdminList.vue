<template>
  <div class="OrderList_body">
    <!-- 头部 -->
    <div>
      <h2 style="font-size: 28px">管理员列表</h2>
      <!-- 下拉框 -->
      <div class="OrderList_selectbox">
        <el-input
          v-model="inputValue"
          style="width: 50%"
          placeholder="请输入需要查找的内容"
        ></el-input>
        <el-button
          @click="clickSo()"
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
    <div class="OrderList_main_table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="ID" width="180"> </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="email" sortable label="邮箱"> </el-table-column>
        <el-table-column prop="created_at" sortable label="创建时间">
        </el-table-column>
        <el-table-column prop="updated_at" sortable label="修改时间">
        </el-table-column>
        <el-table-column prop="updated_at" sortable label="修改时间">
          <template slot-scope="scope">
            <el-button
              @click="clickEndt(scope.row)"
              style="background-color: #52c6d9; color: #fff"
              >修改</el-button
            >
          </template>
        </el-table-column>


        
      </el-table>

      <!-- 弹出框 -->
      <el-dialog
        title="修改管理员"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose"
      >
        <el-form
          :label-position="labelPosition"
          label-width="80px"
          :model="formLabelAlign"
        >
          <el-form-item label="用户名">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="formLabelAlign.email"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button
            style="background-color: #52c6d9; color: #fff"
            @click="clickSure()"
            >确 定</el-button
          >
        </span>
      </el-dialog>

      <!-- 分页 -->
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
</template>

<script>
import { users, usersUpdate } from "@/apis/admin";
export default {
  data() {
    return {
      tableData: [], //客户数据
      token: "", //登录时获取的token
      inputValue: "", //全局搜索值
      inputList: "", //搜索的新的数组
      dialogVisible: false, //弹出框
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        email: "",
      },
      user_id: "", //修改管理员时需要的id
      role_id: "", //账号id
      newName: "", //修改后的用户名
      newEmail: "", //修改后的邮箱
      curpage: 1, //分页
      // changepagesizes: [10, 20, 30], //分页选择
      curpagesize: 10, // 每页显示数量
      Total: 100, //总页数
    };
  },
  created() {
    // 获取列表
    this.user();
    //   绑定enter事件
    var lett = this;
    document.onkeydown = function () {
      var key = window.event.keyCode;
      if (key == 13) {
        //13是键盘上enter的映射
        lett.clickSo();
      }
    };
  },
  methods: {
    // 获取列表
    user() {
      this.token = localStorage.token;
      users({ Authorization: this.token, keyword: this.inputValue,page_number: this.curpage, }).then(
        (res) => {
          // console.log(res);
          this.tableData = res.data.items.data;
          this.Total = res.data.items.total;
        }
      );
    },
    // 搜索
    clickSo() {
      users({ Authorization: this.token, keyword: this.inputValue }).then(
        (res) => {
          for (const obj of res.data.items.data) {
            this.inputList = obj;

            this.tableData = [this.inputList];
          }
        }
      );
    },
    // 弹出框
    clickEndt(row) {
      this.dialogVisible = true;
      // 渲染用户名，邮箱
      this.formLabelAlign.name = row.name;
      this.formLabelAlign.email = row.email;
      // 需要用到的id
      this.role_id = row.role_id;
      this.user_id = row.id;
    },
    // 确认修改
    clickSure() {
      this.dialogVisible = false;
      usersUpdate({ user_id: this.user_id, role_id: this.role_id }).then(
        (res) => {
          console.log(res);
        }
      );
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    // 分页器事件
    // 当前页显示多少条数据
    sizechange(value) {
      this.curpagesize = value;
      this.user();
    },
    // 当前显示页数
    pagechange(value) {
      this.curpage = value;
      this.user();
    },
  },
};
</script>

<style lang="less" scoped>
.OrderList_body {
  height: 100%;
  background-color: #f1f3f6;
  padding: 20px;
  //   头部
  .OrderList_selectbox {
    width: 50%;
    // display: flex;
    // align-items: center;
    margin: 10px 0;
  }
  .OrderList_nav_data {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .OrderList_Order {
      width: 18%;
      background-color: #fff;
      // margin-top: 20px;
      padding: 10px;
      box-sizing: border-box;

      .OrderList_Order_data {
        display: flex;
        justify-content: space-between;
        .OrderList_Order_data_left {
          padding-top: 10px;
        }
      }
    }
  }
  //   主体
  .OrderList_main_table {
    margin-top: 20px;
  }
  .Pagination{
    background-color: #fff;
    padding: 10px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>