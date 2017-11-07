## 通过jsonp解决跨域问题（豆瓣api）

```javascript
let os = document.createElement('script');
//https://api.douban.com前缀 + 请求的接口地址  + 回调函数 + 参数
os.src = 'https://api.douban.com/v2/movie/in_theaters?callback=fn';
document.getElementsByTagName('head')[0].appendChild(os);
os.remove();

function fn(data){
    console.log(data);
    //此时就可以获的数据
}

```