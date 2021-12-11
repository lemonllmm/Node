文件操作的fs 模块
http服务构建的http 模块
path 路径操作模块
os 操作系统模块

 var fs = require("fs");
 var http =require("http);
 require 是一种方法 用来加载模块的
 模块有三种： 
    具名的核心模块 fa http os
    自己编写的文件模块
    相对路径必须加 ./  不能省略
    可以省略后缀名
     require("./b.js") 
Node中没有全局作用域， 只有模块作用域
    外部访问不到内部 内部也访问不到外部 默认是封闭的
既然是模块作用域 ，如何让模块与模块之间进行通信
所有需要被外部访问的成员

 require export 

