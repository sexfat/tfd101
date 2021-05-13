const path = require('path');
const webpack  = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');




module.exports = {
    entry: { 
        index:'./src/app.js',
        about : './src/app2.js'  
     },              // 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
      },            // 出口文件
      module: {
        rules: [{
            // 格式
            test: /\.(sass|scss|css)$/,
            //順序是由下到上 sass > css > style
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: './dist'
                }
              },
                'css-loader',
                'sass-loader'
            ],
        }]

    },  // 處裡對應模組
    plugins: [
        new CleanWebpackPlugin(), //清除構建檔案

        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new HtmlWebpackPlugin({
            chunks : ['index'],  //選擇注入資源 chunk
            inject  : 'body', //預設<body> js </body>  head or body
            template : './index.html',
            //來源
            filename : 'index.html'
            //目的地
        }),
        new HtmlWebpackPlugin({
            chunks : ['about'],  //選擇注入資源 chunk
            inject  : 'body', //預設<body> js </body>  head or body
            template : './about.html',
            //來源
            filename : 'about.html'
            //目的地
        })
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery'
        //   })
    ],// 對應的插件
    resolve: {
        alias: {
           vue: 'vue/dist/vue.js'
        }
      },//vue 打包對應路徑             
    devServer: {
        contentBase: './dist',
        host: 'localhost',
        port: 3000,
        // 指定首頁檔案
        index: 'index.html',
        open: true
    },           // 服務器配置
    mode: 'development'      // 開發模式配置 development production
}