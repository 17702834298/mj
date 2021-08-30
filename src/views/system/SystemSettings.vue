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
          <!-- <el-table-column prop="address" label="删除">
          <template slot-scope="scope">
            <el-button size="small" type="primary" round @click="clickBtn(scope.row)">+</el-button>
          </template>
        </el-table-column> -->
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
          <el-table-column prop="paypal" label="支付方式">
            <template slot-scope="scope">
              <!-- <p>{{ scope.row.paypal }}</p> -->
              <el-input
                size="small"
                placeholder="请输入内容"
                v-model="scope.row"
                @change="Decrease(scope.row)"
                style="width: 100px"
              >
              </el-input>
            </template>
          </el-table-column>
          <el-table-column prop="calculation_method" label="操作">
            <template slot-scope="">
              <el-button size="mini">保存</el-button>
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
          // res.data.disable = false
          for (const i in res.data.items) {
            console.log(i);
            this.topayData = res.data.items.setting_value;
            console.log(this.topayData);
          }
        } else {
          console.log(res.data.error);
        }
      });
    },
    //  更新支付配置
    settingsSetList() {
      settingsSet({}).then((res) => {
        console.log(res);
      });
    },
    //  获取金币配置
    settingsCoinList() {
      settingsCoin({
        Authorization: this.token,
      }).then((res) => {
        if (res.data.code == 0 && res.data.error == "") {
          this.goldData = res.data.items;
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
      if (!row.reduce_price < row.full_price) {
        console.log("可以");
      } else {
        console.log("减量不能大于原价");
        row.reduce_price = "";
      }
      console.log(row.reduce_price, row.full_price);
    },
    // 金币选择器change事件
    changeOptions(val) {
      for (let item of this.goldData) {
        item.calculation_method = val;
      }
      CoinSet({ object: this.goldData }).then((res) => {
        console.log(res);
        this.settingsCoinList();
      });
    },
    // 支付编辑
    handleEdit(row) {
      this.disable = true;
      console.log(row);
    },
    // 支付保存角色信息
    handlecaryy(row) {
      this.disable = false;
      console.log(row);
    },
    // 支付配置
    methodTopay(row) {
      console.log(row.methodTopay);
    },
    //金币新增行
    handleAddRow() {
      this.goldData.push({});
    },
    // 支付新增行
    topayAddRow() {
      this.topayData.push({});
    },
  },
};
</script>

<style lang="less" scoped>
.system_body {
  background-color: #f0f0f0;
  height: 100%;
  .system_body_gold {
    padding: 20px;
    padding-top: 80px;
    display: flex;
    justify-content: space-around;
    // 金币配置
    .system_goldConfig {
      width: 30%;
      border-radius: 20px;
      background-color: #fff;
    }
    .system_Topay {
      width: 30%;
      border-radius: 20px;
      background-color: #fff;
    }
  }
}
</style>
