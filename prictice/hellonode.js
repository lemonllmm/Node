var http = require('http')
var fs = require('fs')
// 1 创建Server
var server = http.createServer()
// 2 .监听Server 的request 的请求事件 
// 请求 处理
// 响应  一个请求对应一个响应

var dir = 'D:/lemon/Node_first/Node_first'
server.on('request',function(req,res){
    var url = req.url
    if(url === '/login'){
        res.setHeader('Content-Type','text/plain;  charset=utf-8')
        res.end('这是登录界面')
    } else if(url === '/'){
        // res.setHeader('Content-Type','text/plain;  charset=utf-8')
        fs.readFile(dir + '/http/hello.html',function(err , data){
            if (err){
                res.end('404 not found')
                console.log(err);
                
                // return 的作用
                // 1 返回方法值
                // 2 阻止代码继续往后执行
                // return res.end('404 not found')
            }else {
                data = data.toString() // 转换为字符串
                data = data.replace('1111','我是仙女')  //替换操作
                res.end(data)
            }
        })
       
                                                                                                                                                                                                                                                                                                                                      
    }else if(url === '/pic'){
        fs.readFile(dir+'/prictice/123.gif',function(err,data){
            res.setHeader('Content-Type','image/gif;charser=uft-8')
            if(err){
                // console.log('图片打开失败');
                res.end('图片打开失败')
                
            }else{
                res.end(data)
            }
            

        })
    }


})
// 3绑定端口启动服务
server.listen(3002,function(){
    
        console.log('服务器启动成功 Server is running');
        
    
})