```javascript
const ajax = new XMLHttpRequest;

ajax.open('get','php/data.xml',true);

ajax.send();

ajax.onload = function(){
    const d = ajax.responseXML; //获取XML数据
    //这里会生成一个document

    let persons = d.getElementsByTagName('person'); 
    
    persons = Array.from(persons);

    persons.forEach((ele,i) => {
        let li = document.createElement('li');

        li.innerHTML = '我的名字叫'+ele.children[0].innerHTML + '今年'+ele.children[1].innerHTML+'岁,性别:'+ele.children[2].innerHTML+',我想说:'+ele.children[3].innerHTML

        ul.appendChild(li);

    });
}
```

```javascript
/*
    有五步：
        0-4

        ***0是监控不到的 ，到了第五步说明完成

    0 － （未初始化）还没有调用send()方法 
    1 － （载入）已调用send()方法，正在发送请求 
    2 － （载入完成）send()方法执行完成，已经接收到全部响应内容 
    3 － （交互）正在解析响应内容 
    4 － （完成）响应内容解析完成，可以在客户端调用了   

    onreadystatechange 每当完成一步就执行一次 

    如果把onreadystatechange放在send之前，那么可以监听到第2步，
    但是意义不大，因为4之前的步骤，前端都拿不到数据，只有第五步的时候
    前端才能有数据。

    ajax.readyState查看当前到了第几步。

    200-207 成功的范围
    5字开头一定是后端的问题

*/
ajax.onreadystatechange = function(){
    // alert(ajax.responseText);
    if(ajax.readyState === 4){
        //alert(ajax.responseText);
        if(ajax.status >= 200 && ajax.status <= 207){
            alert(ajax.status);
        }else{
            alert('失败');
        }
        
    }
}

```
## Ajax 封装
```javascript

function ajax(json){
    //默认的配置
    var settings = {
        url:'',
        method:'get',
        success:function(){},
        fail:function(){},
        data:{},
        dataType:'json'
    }

    //有配置走配置，没配置走默认 
    //浅拷贝
    for(var attr in json){
        settings[attr] = json[attr]; 
    }

    //序列化操作，把对象转成字符串
    var arr = [];
    //1.循环对象  变成数组
    for(var attr in settings.data){
        arr.push(attr + '=' + settings.data[attr]);
    }
    settings.data = arr.join('&');
    
    var ajax = new XMLHttpRequest;
    // console.log(settings.data);
    if(settings.method === 'get'){
        ajax.open('get',settings.url+'?'+settings.data,true);
        ajax.send();
    }else if(settings.method === 'post'){
        ajax.open('post',settings.url,true);
        ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        ajax.send(settings.data);
    }
    ajax.onreadystatechange = function(){
        //4代表完成
        if(ajax.readyState === 4){
            //200-207之前算成功
            if(ajax.status >= 200 && ajax.status <= 207){
                //说明我要json
                if(settings.dataType === 'json'){
                    var d = ajax.responseText;
                    settings.success(eval('('+ new Function('','return'+ d)() +')'));
                }else if(settings.dataType === 'xml'){
                    settings.success(ajax.responseXML);
                }else if(settings.dataType === 'str'){
                    settings.success(ajax.responseText);
                }
                
            }else{
                settings.fail(ajax.status);
            }
        }
    }
}

```

