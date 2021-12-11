//构建一个web服务器
//1 加载http核心模块
var http = require("http");
// 使用 http.creatServer()方法创建一个WEB 服务器
var server = http.createServer()

// 3 服务器的工作
//  提供服务
//   发请求
//   接收请求
//   处理请求
//   反馈（发送响应）
// 注册request 请求事件
// 当客户端请求发过来，就会自动触发服务器的request请求事件
// 然后执行第二个参数：回调处理
server.on('request',function(){
    console.log('已经收到客户端的请求了');
    
})

// 绑定端口号  启动服务器
server.listen(5000,function(){
    console.log('服务器启动成功，可以通过 http://127.0.0.1:5000/ 访问');
})