var http = require("http");

var server = http.createServer();

server.on('request',function(req,res){

var url= req.url;

//根据不同的路径请求不同的内容
// if(url ==='/'){
//     res.end('index page');
// }else if(url==='/login'){
//     res.end('这是登陆');

// }else{
//     res.end('404 not found')
// }

if(url ==='/project'){
    var projects=[
        {
            name:'apple',
            price:'128'
        },
        {
            name:'banana',
            price:'257'
        },
        {
            name:'huawei',
            price:'124'
        }, {
            name:'oppo',
            price:'199'
        },
    ];
    //响应内容只能是二进制数据或者字符串 
    res.end(JSON.stringify(projects));
// JSON.stringify();  将javascript对象转换为JSON字符串
// JSON.parse();  将JSON字符串转为对象 JSON所有键值都必须使用双引号包裹
}

})

server.listen(3002,function(){
    console.log('服务器启动成功');
})