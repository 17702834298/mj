<template>
  <div class="system_body">
    <div class="system_body_gold">
      <!-- 金币 -->
      <div class="system_goldConfig">
        <div
          style="
            padding: 3%;
            background-color: #52c6d9;
            border-radius: 20px 20px 0 0;
            color: #fff;
            display: flex;
            justify-content: space-between;
          "
        >
          <p><span>金币配置</span></p>
          <el-button type="primary" size="mini" @click="handleAddRow"
            >新增行</el-button
          >
        </div>
        <el-table :data="goldData" style="width: 100%; border-radius: 20px">
          <el-table-column prop="full_price" label="原价">
            <template slot-scope="scope">
              <el-input
                size="small"
                placeholder="请输入内容"
                v-model="scope.row.full_price"
                @change="OriginalPrice(scope.row)"
                style="width: 100px"
              >
              </el-input>
            </template>
          </el-table-column>
          <el-table-column prop="reduce_price" label="减量">
            <template slot-scope="scope">
              <el-input
                size="small"
                placeholder="请输入内容"
                v-model="scope.row.reduce_price"
                @change="Decrease(scope.row)"
                style="width: 100px"
              >
              </el-input>
            </template>
          </el-table-column>
          <el-table-column prop="calculation_method" label="总满减/每满减">
            <template slot-scope="scope">
              <el-select
                v-model="scope.row.calculation_method"
                size="small"
                placeholder="总/每二选其一"
                @change="changeOptions"
              >
                <el-option
                  v-for="item in options"
                  :key="item.id"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="删除">
          <template slot-scope="scope">
            <el-button size="small" type="primary"  @click="clickDeletBtn(scope.row)">删除</el-button>
          </template>
        </el-table-column>
        </el-table>
      </div>





      <!-- 支付 -->
      <div class="system_Topay">
        <div
          style="
            padding: 3%;
            background-color: #52c6d9;
            border-radius: 20px 20px 0 0;
            color: #fff;
             display: flex;
            justify-content: space-between;
          "
        >
          <p>支付配置</p>
          <el-button type="primary" size="mini" @click="topayAddRow"
            >新增行</el-button
          >
        </div>
        <el-table :data="topayData" style="width: 100%; border-radius: 20px">
          <el-table-column prop="value" label="支付方式">
            <template slot-scope="scope">
              <el-input
                size="small"
                placeholder="请输入内容"
                v-model="scope.row.value"
                style="width: 100px"
              >
              </el-input>
            </template>
          </el-table-column>
          <el-table-column prop="calculation_method" label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="clickSave(scope.row.index)">保存</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>






    </div>
  </div>
</template>

<script>
import {
  settingsPayment,
  settingsSet,
  settingsCoin,
  CoinSet,
  settingDelete
} from "@/apis/Configuration";
export default {
  data() {
    return {
      token: "", //登录获取到的token
      options: [
        { value: 1, label: "总满减", id: -1 },
        { value: 2, label: "每满减", id: -2 },
      ],
      // options: [],
      value: "", //选择器值
      goldValue1: "", //金币输入框1的值
      goldValue2: "", //金币输入框2的值
      goldData: [], //金币配置
      topayValue1: "", //支付输入框1的值
      topayValue2: "", //支付输入框2的值
      topayData: [], //支付配置
      disable: false,
      name: "", //用户名
      pwd: "", //密码
      val:[],//更新后的支付方式
    };
  },
  created() {
    this.token = localStorage.token;
    this.name = localStorage.name;
    this.pwd = localStorage.pwd;
    //   调用支付配置接口
    this.PaymentList();

    // 调用获取金币接口
    this.settingsCoinList();
  },
  methods: {



    //   获取支付配置
    PaymentList() {
      settingsPayment({
        Authorization: this.token,
      }).then((res) => {
        if (res.data.code == 0 && res.data.error == "") {
          console.log("支付", res);

            // 转换数据格式
            // for (const v in res.data.items) {
            //   this.topayData.push({key:v,value:res.data.items[v]})
            
            // }

           let data =  res.data.items.setting_value.map( (v,index) =>{
              return v = {"value":v,"index":index}
            })  
            this.topayData = data
            console.log("支付配置",data);

        } else {
          console.log(res.data.error);
        }
      });
    },









    
    //  获取金币配置
    settingsCoinList() {
      settingsCoin({
        Authorization: this.token,
      }).then((res) => {
        if (res.data.code == 0 && res.data.error == "") {
          this.goldData = res.data.items;
          console.log(this.goldData);
        } else {
          console.log(res.data.error);
        }
      });
    },

    //   金币原价
    OriginalPrice(row) {
      console.log(row.full_price);
    },
    //   金币减量
    Decrease(row) {
      if (row.reduce_price < row.full_price) {
        console.log("可以");
      } else {
        this.$message({
          message: '减量不能大于原价哦！',
          type: 'warning'
        });
        row.reduce_price = "";
      }
      console.log(row.reduce_price, row.full_price);
    },
    // 金币选择器change事件
    changeOptions(val) {
      for (let item of this.goldData) {
        item.calculation_method = val;
      }
      // 更新金币配置
      CoinSet({ object: this.goldData }).then((res) => {
        console.log(res);
        this.settingsCoinList();
      });
    },
    // 删除某个配置
    clickDeletBtn(){
      settingDelete({Authorization:this.token,setting_key:row}).then((res) => {
        console.log(res);
      })
    },
    //金币新增行
    handleAddRow() {
      this.goldData.push({});
    },
    // 支付新增行
    topayAddRow() {
      this.topayData.push({value:"",index:this.topayData.length});
      console.log(this.topayData)
    },
 
    // 保存支付修改
    clickSave(index){
    
      let data = []
          for(let k in this.topayData){
              if(index == k){
                data.push(this.topayData[k].value)
              }
          }
      settingsSet({Authorization:this.token,payment:data}).then((res) => {
        console.log('保存成功',res);
        // 调用列表接口
        this.PaymentList()
      });
    }
  },
};
</script>

<style lang="less" scoped>
.system_body {
  background-color: #f0f0f0;
  height: 100%;
  overflow:scroll;
  .system_body_gold {
    padding: 20px;
    padding-top: 80px;
    display: flex;
    justify-content: space-around;
    // 金币配置
    .system_goldConfig {
      width: 40%;
      border-radius: 20px;
      background-color: #fff;
    }
    .system_Topay {
      width: 40%;
      border-radius: 20px;
      background-color: #fff;
    }
  }
}
</style>
