<template>
  <div class="Saleliet_body">
    <!-- 头部 -->
    <div>
      <h2 style="font-size: 28px">权限列表</h2>
     
    </div>

    <!-- 主体 -->
    <div class="Saleliet_main_table">
      <el-table :data="tableData" border  style="width: 100%">
        <el-table-column prop="id" label="ID" width="180"> </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="name_cn" sortable label="权限">
        </el-table-column>
        <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleDelete(scope.row)"
                  style="background-color:#52c6d9;color:#fff"
                  >删除</el-button
                >
              </template>
            </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {permissions,perdelete} from '@/apis/admin'
export default {
  data() {
    return {
      token:'',  //登录时的token
      tableData: [],
    };
  },
  created(){
    this.perm()
  },
  methods:{
    // 获取列表
    perm(){
      this.token = localStorage.token
      permissions({Authorization:this.token}).then((res) => {
        console.log(res);
        this.tableData = res.data.items
      })
    },
    // 删除
    handleDelete(row){
      this.$confirm('此操作将永久删除该管理员, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           perdelete({Authorization:this.token,permission_id:row.id}).then((res) => {
            console.log(res);
          })
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    }
  }
};
</script>

<style lang="less" scoped>
.Saleliet_body {
  height: 100%;
  background-color: #f1f3f6;
  padding: 20px;
//   头部
  .Saleliet_selectbox {
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }
  .Saleliet_nav_data {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .Saleliet_Order {
      width: 16%;
      background-color: #fff;
      // margin-top: 20px;
      padding: 10px;
      box-sizing: border-box;

      .Saleliet_Order_data {
        display: flex;
        justify-content: space-between;
        .Saleliet_Order_data_left {
          width: 48%;
          border-right: #ccc solid 1px;
        }
        .Saleliet_Order_data_right {
          width: 48%;
        }
      }
    }
  }
//   主体
  .Saleliet_main_table{
      margin-top: 20px;
  }
}
</style>