var webpack = require('webpack');
const path = require('path');


module.exports = {
	entry:'./src/app.js',
	//输出文件出口
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'bba.js'
	},
	module: {
		rules: [{
			test: /.js$/,
			use:[ 'babel-loader' ],
			exclude:[
				path.resolve(__dirname,'node_modules')
			]
		}]
	}
}