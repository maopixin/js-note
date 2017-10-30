## 创建服务器
```javascript
// request：请求
//response：响应
//listen:(端口号)；

const http = require('http');//创建一个http的服务器
const server = http.createServer(function(request,response){
    //request.url , 请求地址
    response.write(‘str’);//写入字符
    response.end();//结束
    
}).listen(285);//端口号

```

## 创建文件
```javascript
var fs = require('fs');//对象

/*
 * 1.文件名
 * 2.内容
 * 3.回调
 */

fs.writeFile(文件名，文件内容，function(err){
    if(err){
        console.log('创建失败')
    };
    console.log('创建成功')
})

```

## 读取文件
```javascript
var fs = require('fs');//对象

fs.readFile(文件地址，function(err,data){
    if(err){
		console.log('404');//err
	}
	console.log(data);
})

```