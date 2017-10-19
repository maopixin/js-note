***非空对象下才能加属性或者方法.***
# 包装对象:
- 当去调用简单类型的属性或者方法的时候，系统会偷偷地把简单类型转成复合类型，使用该对象的属性或者方法，之后又偷偷地销毁。
- 简单类型的length只能读不能写。 

```javascript
var str = 'abc';
var arr = [1,2,3];
arr.num = 0;
str.num = 0;

console.log(str.num);   //=>undefined

arr.length = 1;

var str2 = new String('abc');

str2.num = 1;  //str2已经是对象了，所以可以加属性  typeof str2

console.dir(str2);    // =>1
```

***只要使用alert那么它就会偷偷地调用toSting方法***

toSting -> 把xx类型转成string类型

所有的类型都有toSting方法

**obj -> [object Object]  第二个Object代表系统构造函数是谁**

toSting()  还能转进制  -> var num = 10; num.toString(进制数)


## 修改this指向的方法
1. ***call***:函数身上的一个方法，有若干的参数

        第一个参数：
            改变this指向
    
       第二个往后的参数：
            就是实参的个数。
            
```javascript
function fn(){
    console.log(this);
}

fn();   //  =>  window
fn.call(document);  // =>   document





//2 小技巧
var lis = document.getElementsByTagName('li');
/*
*Array.slice方法   底层是通过this来获取array的 并且返回一个新数组
*
*所以 通过调用Array原型下的slice方法  且用call改变this指向  
*
*使得类数组可以使用slice方法  由于没有传参会返回一个真正的数组
*/
lis = Array.prototype.slice.call(lis);

lis.forEach((ele,i)=>{//新数组可以使用forEach循环
    ele.onclick = function(){
        alert(i);
    }
});


//3 数组的foreach

var arr = [1,2,3,4,5];

Array.prototype.forEachT = function(callback,that){
    for(var i=0;i<this.length;i++){
        callback.call(that,this[i],i,this);
    }
}

arr.forEachT(function(e,i,all){
    console.log(this);
},document);



```
2.  ***apply***:只有2个参数

        第一个参数：
            改变this指向

        第二个参数:
            数组（原函数的参数的集合）

```javascript

//找到数组中最小的数字是谁？     （apply的小技巧）

var arr = [70,30,11,4,1,3,5,7,9,0];

// console.log(Math.min(10,20,5));

console.log(Math.max.apply('',arr));

//通过apply方法 使得原函数的参数  要通过数组的形式传进去  

```
3. ***bind***: 若干个参数:

            (修正this指向但是不直接调用，它会返回一个新的函数当调用新函数的时候会调出修改之后的this)

            第一个参数：
                改变this指向
            第二个往后的参数：
                就是实参的个数。
                

```javascript



```



## instanceof :（二元运算符）

        实例化(对象)  instanceof  构造函数

        左值是不是右值构造出来的  左值必须要为对象

       返回的是boolean值
```javascript
function fn(){}
var f = new fn;
console.log(f instanceof fn);   //=>true

```

## hasOwnProperty 

- 判断方法是不是私有的
```javascript
function Fn(){
    this.name = 'hss';
}
var fn = new Fn;
console.log(fn.hasOwnProperty('name'));   //=>true

```