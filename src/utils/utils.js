import axios from 'axios'
import Vue from 'vue'
axios.defaults.baseURL = "/api"



// 补零
const zeroNum = function (num) {
    return num < 10 ? "0" + num : num;
};
// 处理日期格式
let datatime = (tiem) => {
    let date = new Date(tiem);
    let getmonth = date.getMonth() + 1;
    let getdate = date.getDate();
    let gethours = date.getHours();
    let getmin = date.getMinutes();
    let getsec = date.getSeconds();
    // 把转换后的时间格式重新赋予
    return (tiem =
        date.getFullYear() +
        "-" +
        zeroNum(getmonth) +
        "-" +
        zeroNum(getdate) +
        " " +
        zeroNum(gethours) +
        ":" +
        zeroNum(getmin) +
        ":" +
        zeroNum(getsec));
};

// 获取年月日时间格式
let getYYYYMMDD = datestr => {
    let time = new Date(datestr)
    return time.getFullYear() + "-" + zeroNum(time.getMonth() + 1) + "-" + zeroNum(time.getDate())
}

let getHHmmss = datestrs => {
    let times = new Date(datestrs)
    return zeroNum(times.getHours()) + ":" + zeroNum(times.getMinutes()) + ":" + zeroNum(times.getSeconds())
}


// 绑定enter事件
let enter = () => {
    var lett = this;
    document.onkeydown = function () {
      var key = window.event.keyCode;
      if (key == 13) {
        //13是键盘上enter的映射
        lett.clickLogin();
      }
    };
}

// 请求拦截
    axios.interceptors.request.use(
        config => {
          // 带token
          // showFullScreenLoading()//全局loading是否启用
          const token = window.localStorage.getItem("token");
          token && (config.headers.Authorization = 'Bearer' + token);
          return config;
        },
        error => {
          return Promise.error(error);
        })



var bus = new Vue()
export { axios, datatime, getYYYYMMDD, bus, getHHmmss ,enter}