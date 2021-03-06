/**
 * Created by rilke on 15/8/24.
 * /js error  | api error | 前端性能 | 点击流
 */

var express = require('express');
var https= require('https');
var log4js = require('log4js');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();

https.createServer({
	key: fs.readFileSync('sslcert/key.pem'),
	cert: fs.readFileSync('sslcert/cert.pem')
},app).listen(8081);

log4js.configure('log4js.config.json',{reloadSecs:300});

var logger = log4js.getLogger('console');

//CORS middleware
var allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');

	next();
};

app.use(allowCrossDomain);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


app.all('/error',function(req,res){
	console.log(JSON.stringify(req.body));
	logger.debug(req.body);
	res.end();
});
app.all('/',function(req,res){
	res.header('Content-type', 'text/html');
	console.log(req.headers);
	return res.end('<h1>Hello, Secure World!</h1>');
});
