var http = require('http')
var fs = require('fs')
var template = require('art-template')
var url = require('url')
var moment = require('moment');


var comments =[
{
    name : '老秦',
    message : '六级必过',
    dateTime : '2021/12/17'
},
{
    name : '老秦',
    message : '六级必过',
    dateTime : '2021/12/17'
},
{
    name : '老秦',
    message : '六级必过',
    dateTime : '2021/12/17'
},
{
    name : '郑局',
    message : '公务员必上岸',
    dateTime : '2021/12/17'
},
{
    name : '郑局',
    message : '公务员必上岸',
    dateTime : '2021/12/17'
}


]

// /comm?name= djasdh&message =sdjhksa
//对于表单这种请求路径，使用URL

var server = http.createServer()

server.on('request',function(req,res){
    // 使用url.parse方法将路径解析为方便操作的对象，第二个参数表示直接将查询字符串转为一个对象 通过querry属性来访问

    var parseObj = url.parse(req.url,true)
    // var url = req.url
    //单独获取查询字符串的路径部分
    var pathname = parseObj.pathname

    if(pathname === '/'){
        fs.readFile('./views/index.html',function(err,data){
            if(err){
                console.log('文件打开失败');
                
            }else{
                
                // data = data.toString()
                var htmlStr =  template.render(data.toString(),{
                    comments:comments
                })
                res.end(htmlStr)
            }
        })
    }else if(pathname=== '/post'){
        fs.readFile('./views/post.html',function(err,data){
            if(err){
              return res.end(' 404 not found')
                
            }else{
               console.log(data);
                res.end(data)
            }
        })
    }else if(pathname  == '/comm'){
        console.log('收到表单请求了',parseObj.query);
//将请求路径中得查询字符串解析成一个对象
        // res.end(JSON.stringify(parseObj.query));
        //获取表单数据  生成日期到对象中 存储到数组中  让用户重定向到首页 重定向得时候，数据发生改变 用户看到新得数据
        var comment  = parseObj.query
        var current_time =  moment(Date.now()).format('YYYY-MM-DD HH:mm:ss')
        comment.dateTime  = current_time
        comments.push(comment)
        // 服务端此时跳转 
        // 如何通过服务器让客户端重定向
        //  1 状态码设置为302  临时重定向  statusCode
        //   2 在响应头中通过Location 告诉客户端往哪里重定向  setHeader()
        //如果客户端收到服务器的响应状态码是302 就会自动去响应头自动去找Loaction 然后对该地址发起新的请求
        //所以客户端自动跳转
        res.statusCode  = 302
        res.setHeader('Location','/')
        res.end()

    }else{
        res.end('404 not found')
    }
})

server.listen(3001,function(err,data){
    console.log('Server is running');
    
})