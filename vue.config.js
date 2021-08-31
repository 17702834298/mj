
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: "http://192.168.1.200:8081/",
                changeOrigin: true,
                ws: false,
                pathRewrite: {
                    "^/api": ""
                }
            }
        },
        host: '0.0.0.0',   //本地
        port: 8080,    //端口号
        open: true  , //默认false   true自动打开
        // publicPath: "./",
    },
    

}