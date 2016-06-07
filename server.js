var http = require('http');
var express = require('express');
var app = express();
var load = require('express-load');
var bodyParser = require('body-parser');
var users = require('./users');

app.set('port', 3000);
app.set('view engine', 'ejs');
app.set('views', './index.html');

app.use(express.static('./'));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());
app.use(require('method-override')());

app.get('/users',(req, res) => {
	res.set({ 'Content-Type': 'application/json'});

	res.json(users.list);
});

http.createServer(app)
	.listen(3000, function() {
		console.log('Servidor executando na porta: ' + 3000);
	});