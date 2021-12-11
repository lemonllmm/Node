var http = require('http');
var fs = require('fs')
var server=http.createServer();

server.on("request",function(req,res){


    var  url =req.url;
    if(url ==='/plain'){
        res.setHeader('Content-Type','text/plain; charset=utf-8');
        res.end("hello 我的朋友")
    }else if(url ==='/html'){
        res.setHeader('Content-Type','text/html; charset=utf-8');
        res.end('<p>hello html <a href="">我是仙女点我</a></p>');
    }else if(url === '/hello'){
        fs.readFile('./hello.html',function(err,data){
            if(err){
                res.setHeader('Content-Type','text/html; charset=utf-8');
                // console.log('文件读取失败');
                res.end('文件读取失败')
            }else{
                res.setHeader('Content-Type','text/html; charset=utf-8');
                res.end(data);
            }
        })
    }else if(url ==='/txt'){
        fs.readFile('./hello.txt',function(err,data){
            if(err){
                res.end("读取失败")
            }else{
                
                res.setHeader('Content-Type','text/plain; charset=utf-8');
                res.end(data);
            }
        })
    }
    

});

server.listen(3001,function(){

    console.log('Server is running');
})