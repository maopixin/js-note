
import React from 'react';
import ReactDOM from 'react-dom';

import {c} from './component/myName';

console.log(c)

ReactDOM.render(
	<div>Hello React</div>,
	document.getElementById('root')
);

const obc = {
	a:1,
	b:2,
	c:3
};

let name =c;
let nameObj = name('Tom');

console.log({...obc,...nameObj});


//my code
function drag(id) {
	this.box = document.getElementById(id);
}
drag.prototype.addThing = function(ev) {
	var _this = this;
	this.box.onmousedown = function(ev) {
		_this.thing(ev);
	}
}
drag.prototype.thing = function(ev) {
	var _this = this;
	this.box.dl = ev.clientX - this.box.offsetLeft;
	this.box.dt = ev.clientY - this.box.offsetTop;
	document.onmousemove = function(ev) {
		_this.move(ev);
	};
	document.onmouseup = function() {
		_this.up();
	};
}
drag.prototype.move = function(ev) {
	this.box.style.top = ev.clientY - this.box.dt + 'px';
	this.box.style.left = ev.clientX - this.box.dl + 'px';
}
drag.prototype.up = function() {
	document.onmousemove = null;
	document.onmouseup = null;
};

var s = new drag('box');
var t = new drag('bigbox')
s.addThing();
t.addThing()