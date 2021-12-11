var url = require('url')

var obj = url.parse('/comm?name=123&message=+++++++%0D%0A++++++++++++%E6%88%91%E5%96%9C%E6%AC%A2%E4%BD%A0',true)
console.log(obj);
console.log(obj.query);
console.log(obj.pathname);



// search: '?name=123&message=+++++++%0D%0A++++++++++++%E6%88%91%E5%96%9C%E6%AC%A2%E4%BD%A0',
// query: [Object: null prototype] {
//   name: '123',
//   message: '       \r\n            我喜欢你'
// },
// pathname: '/comm',
