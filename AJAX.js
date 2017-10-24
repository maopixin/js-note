function ajax (data){
	//默认设置
	var setting = {
		url:'',
        method:'get',
        success:function(){},
        fail:function(){},
        data:{},
        dataType:'json'
	}
	//找到需要修改的东西
	for(var attr in data){
		setting[attr] = data[attr]
	}
	
	//序列化操作
	var arr = [];
	for(var attr in setting.data){
		arr.push(attr + '=' + setting.data[attr])
	}
	var txt = arr.join('&');
	
	//create xhr
	var xhr = new XMLHttpRequest;
	if(setting.method == 'get'){
		xhr.open('get',setting.url + '?' + txt,true);
		xhr.send();
	}else if(setting.method == 'post'){
		xhr.open('post',setting.url,true);
		xhr.setRequestHeader('Content-Type','application/-x-www-form-urlencoded');
		xhr.send(txt);
	}
	
	xhr.onreadystatechange = function(){
		
		if(xhr.readyState == 4){
			
			if( xhr.status >= 200 && xhr.status <= 207 ){
				//成功
				if(setting.dataType == 'json'){
					setting.success(JSON.parse(xhr.responseText))
				}else if(setting.dataType == 'xml'){
					setting.success(xhr.responseXML)
				}else if(setting.dataType == 'str'){
					setting.success(xhr.responseText)
				}
			}else{
				setting.fail(xhr.status);
			}
			
		}
		
	}
	
}


