## 定位
1. 通过HTML5 获取经纬度
```javascript

function position() {
    //判断浏览器是否支持定位
	if(navigator.geolocation) {
	    //这里接受两个参数 定位成功则执行第一个函数，否则执行第二个
		navigator.geolocation.getCurrentPosition(showPosition, showError);
	} else {
		alert("不支持定位");
	}
}
//接受一个参数 参数为对象
function showPosition(position){
    //position中有一个coords 这个下面 有latitude：纬度  longitude：经度
} 

//err
//接收一个错误参数
function showError(error){
    switch(error.code) {
		case error.PERMISSION_DENIED:
			alert("定位失败,用户拒绝请求地理定位");
			break;
		case error.POSITION_UNAVAILABLE:
			alert("定位失败,位置信息是不可用");
			break;
		case error.TIMEOUT:
			alert("定位失败,请求获取用户位置超时");
			break;
		case error.UNKNOWN_ERROR:
			alert("定位失败,定位系统失效");
			break;
	}
}
```


2. 通过百度地图API来逆反地址

```javascript

//请求地址url：http://api.map.baidu.com/geocoder/v2/?callback=renderReverse&location=纬度，经度&output=json&pois=1&ak=你的ak
//方式为get方式，我们可以通过jq的ajax来请求

//经纬度是上边showposition函数得到的
$.ajax({
	type: "get",
	url: "http://api.map.baidu.com/geocoder/v2/?callback=renderReverse&location=" + position.coords.latitude + "," + position.coords.longitude + "&output=json&pois=1&ak=你的ak",
	async: false,
	dataType:"jsonp",
	success: function(data) {
		alert(data)
	}
});
```