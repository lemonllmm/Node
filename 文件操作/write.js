var fs = require('fs');

// 第一个参数文件路径，第二个参数是写入的文件内容

// 成功 写入成功 err 是null  data 数据
//失败  err 错误对象  date  undefined
fs.writeFile('./文件操作/note.md','你好，介绍一下这是Node.js',function(err){
 if(err){
    console.log('写入成功');
 }else{
    console.log('写入失败');
    console.log(err.stack);
 }

})