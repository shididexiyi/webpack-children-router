const path = require("path")
const uglify = require("uglifyjs-webpack-plugin");
const htmlPlugin = require("html-webpack-plugin");

module.exports={
    //入口
    entry:{
        main:'./src/main.js',
        main2:'./src/main2.js'
    },
    //出口
    output:{
        //打包的路径
        path:path.resolve(__dirname,'../dist'),
        //打包的文件名称
        filename:'[name].js'
    },
    module:{
        rules:[
            //css loader
            {
                test: /\.css$/,
                use:[
                    {loader: "style-loader"},
                    {loader: "css-loader"}
                ]
            },
            {
                test:/\.(png|jpg|gif|jpeg)/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:500
                    }
                }]
            },
            {   test:/\.js$/, 
                exclude:/node_modules/ ,
                loader:'babel-loader',
            },
            //配置babel来转化高级的ES6语法
            {   test:/\.vue$/,
                use:'vue-loader',
            },
                //处理.vue文件的loader
            {
                test: /\.scss$/,
                use: [ 'style-loader','css-loader','sass-loader' ]
            }
        ]
    },
    plugins:[
        new uglify(),//js压缩文件
        new htmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        }),
        
        
    ],
    devServer:{
        //设置基本目录结构
        contentBase:path.resolve(__dirname,'../dist'),
        //服务器的IP地址。可以使用IP也可以使用localhost
        host:'localhost',
        //服务器压缩是否开启
        compress:true,
        //配置服务端口号
        port:8888
    
    },
    resolve:{
         alias:{
             'vue$':'vue/dist/vue.js'
         }
    }
}