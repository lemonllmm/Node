var fs = require("fs");
//读文件操作
fs.readFile('inpu.txt', function (err, data) {
   if (err){
      console.log('读取文件失败了');
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});
console.log("程序执行完毕");