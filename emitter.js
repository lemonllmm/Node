//event.js 文件
var EventEmitter = require('events').EventEmitter;  //引入events模块
var event = new EventEmitter();   //创建EventEmitter对象
event.on('some_event', function() {   //监听事件
    console.log('some_event 事件触发'); 
}); 
setTimeout(function() { 
    event.emit('some_event');  //触发事件
}, 1000); 


