// require 两个作用：
// 加载文件模块并执行里面的代码
// 拿到被加载文件模块导出的接口对象

// 每个文件模块中都提供了一个对象 export

var ret=require('./b')
console.log(ret.foo);