const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
  // 项目默认部署在根目录下
  publicPath: '/',
  // 生产环境禁止生成SourceMap
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
  // eslint-disable-next-line
  configureWebpack: config => {
    return {
      optimization: {
        minimizer: [
          new TerserPlugin({
            cache: true, // 开启 cache，加快二次构建速度
            parallel: true, // 开启多线程压缩打包
            terserOptions: {
              output: {
                comments: false, // 打包时删除注释
              },
              compress: {
                drop_console: true, // 生产环境禁止打印console.log()
                dead_code: true, // 删除无法访问的代码
                drop_debugger: true, // 删除debugger
              },
            },
          }),
        ],
      },
    };
  },
};
