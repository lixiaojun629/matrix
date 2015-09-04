/**
 * Created by rilke on 15/8/24.
 * /js error  | api error | 前端性能 | 点击流
 */

var express = require('express');
var http = require('http');
var log4js = require('log4js');

var app = express();

log4js.configure('log4js.config.json',{reloadSecs:300});

app.listen(80);

//CORS middleware
var allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');

	next();
};

app.use(allowCrossDomain);

app.all('/error',function(req,res){

});
