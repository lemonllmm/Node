 var fs = require('fs')

 fs.readdir('D:/lemon/Node_first/Node_first/http',function(err,files){
     if(err){
         return console.log('目录不存在');
         
     }else{
         console.log(files);
         
     }
 })