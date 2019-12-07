module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Eleme/dist/'
    : '/',
  devServer: {
    open: true, //是否自动弹出浏览器页面
    proxy: {
      '/api': {
        target: 'http://localhost:8080',  // 目标 API 地址
        ws: false,  // 是否代理 websockets
        changeOrigin: true,  // 将主机标头的原点更改为目标URL
        pathRewrite: {
          '^/api': ''  // 替换 /api 为空
        }
      }
    }
  }
}