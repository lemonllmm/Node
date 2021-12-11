var fs = require("fs");
//阻塞代码示例
var data = fs.readFileSync('input.txt');  //文件读入

console.log(data.toString());
console.log("程序执行结束");