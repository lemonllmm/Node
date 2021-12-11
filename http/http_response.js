const { write } = require("fs");
var http = require("http");
var server = http.createServer()

// request 请求事件处理函数，需要接收两个参数
// request 请求对象
//     请求对象可以用来获取客户端的一些请求信息，例如请求路径
// Response 响应对象
//     响应对象可以用来给客户端发送响应信息

server.on('request',function(request,response){

    //http:127.0.0.1:5000//
    console.log('已经收到客户端的请求了,请求路径是'+request.url);
    
    // response 对象有一个方法 ，write可以给客户端发送响应
    // wirte 可以使用多次
    response.write('hello');
    //告诉客户端结束了
    response.end();

    // 根据不同路径响应不同结果
    // /index  主页  /login 登陆 /register 注册
    
})

// 绑定端口号  启动服务器
server.listen(5000,function(){
    console.log('服务器启动成功，可以通过 http://127.0.0.1:5000/ 访问');
})