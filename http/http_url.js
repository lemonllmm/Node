var http =require('http');

// 1 创建Server 
var server = http.createServer();
// 2监听request 
server.on('request',function(req,res){
    // console.log("请求收到了，请求路径是"+req.url);
// res.write('hello')
// res.write('login')
// res.write('注册了')

// 可以直接end进行响应
// res.end('hello node');

// 根据不同路径发送不同结果
// 1 获取请求路径
    // req.url获取到的是端口号之后的那一部分路径
    // 也就是所有的URL都是以/开头
    // 2 判断路径处理响应

var url =req.url;
res.end(url);

})
// 3绑定端口启动服务
server.listen(80,function(){
    console.log('服务器启动成功');
})
