var http = require('http');

var server = http.createServer();

server.on("request",function(req,res){

    // 由于服务端默认发送的数据是 uft-8 编码的内容
    // 但是浏览器不知道是utf-8 使用的是默认的当前操作系统去编码解析 默认的是gbk
    // 解决方法： 正确告诉浏览器我给你发送的内容是什么编码的
    // 在Http协议中，Content-Type 就是告诉对方我给你发送的数据内容是什么类型
    // text/plain 表示普通文本
    var  url = req.url;
    if(url ==='/plain'){
        res.setHeader('Content-Type','text/plain; charset=utf-8');
        res.end("hello 我的朋友")
    }else if(url ==='/html'){
        res.setHeader('Content-Type','text/html; charset=utf-8');
        res.end('<p>hello html <a href="">我是仙女点我</a></p>');
    }
    

});

server.listen(3001,function(){

    console.log('Server is running');
})