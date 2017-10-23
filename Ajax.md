### AJAX：
            Asynchronous JavaScript and XML（异步JavaScript和XML)
            JSON

                '[]'  '{}'
            当下的数据格式不再只有XML了，还有JSON
            后端吐的所有的数据都是字符串。

            '[]' '{}'

            前后端的数据交互的。----> 获取数据

            优点:
                可以提高系统性能，优化用户界面，基本不跳转

            安装集成环境:
                后端的文件必须运行在服务器上，***文件夹必须不能是中文，尽量文件名也英文。


            localhost/2017-10-23/xx.html


            ajax并不难，****难点是在数据处理上面。

## ajax的交互模型:
1. 创建一个ajax对象
2. 填写地址
3. 发送给服务器
4. 等待
5. 通话

```javascript

var ajax = new XMLHttpRequest; //创建一个ajax对象

//填写地址。
ajax.open('post','php/post.php',true);

ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//发送给服务器
ajax.send('user='+userId.value);

//等待
ajax.onload = function(){
    //通话
    console.log(ajax.responseText);
}


```


get方式

    （安全性不是太高的，体积较小的）：
    通过地址栏进行数据的传输。.php?user=leo&password=123456
    ?user=leo&password=12345（open('get',url+字段拼接)）
    相对不安全
    体积较小，具体能传输多少，跟浏览器限制有关系
    在写中文的时候，IE下会把中文转成URI编码，会引起报错。
    通过encodeURI(转一下);
            

post方式

    （跟用户信息相关的、较大体积的）
    服务器进行传输(拼接的字段要在send中)
    理论上来说是没有大小限制的（后端会做限制）
    相对就安全一些
    在send前加请求头
    ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');




## URI码

```javascript

let str = '%E4%B8%8E';

console.log(decodeURI(str));  //码转中文

console.log(encodeURI('与'))//把中文转成URI码

```