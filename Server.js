var express = require('express');
var app = express();
const path = require('path');
var viewPath = path.resolve(__dirname, 'views');
var favicon = require('serve-favicon');

const season1Data = require('./data/season-1-challenges');
const season2Data = require('./data/season-2-challenges');
const season2BattleMode = require('./data/season-2-battlemode');
const halloffamedata = require('./data/hall-of-fame');
const getAvatars = require('./getAvatars');

(async function() {
	const avatars = await getAvatars();
	app.set('view engine', 'ejs');
	app.use(function (req, res, next) {
	  console.log('/' + req.method);
	  next();	
	});

	app.get('/', function (req, res) {
	  res.render('index');
	});

	app.get('/battlemode', function (req, res) {
	  res.render('battlemode', { data: season2BattleMode });
	});
		
	app.get('/leaderboard', function (req, res) {
	  res.render('leaderboard', { data: avatars });
	});

	app.get('/challenges', function (req, res) {
	  res.render('challenges', { data: season2Data });
	});
	app.get('/information', function (req, res) {
	  res.render('information');
	});

	app.get('/revision', function (req, res) {
	  res.render('revision');
	});

	app.get('/highlights', function (req, res) {
	  res.render('highlights');
	});
	app.get('/about', function (req, res) {
	  res.render('about');
	});
	app.get('/halloffame', function (req, res) {
	  res.render('halloffame', { data: halloffamedata });
	});

	app.get('/recap1', function (req, res) {
	  res.sendFile(path.resolve(viewPath, 'recap1.html'));
	});
	app.get('/recap2', function (req, res) {
	  res.sendFile(path.resolve(viewPath, 'recap2.html'));
	});
	app.get('/recap3', function (req, res) {
	  res.sendFile(path.resolve(viewPath, 'recap3.html'));
	});
	app.get('/recap4', function (req, res) {
	  res.sendFile(path.resolve(viewPath, 'recap4.html'));
	});
	app.get('/recap5', function (req, res) {
	  res.sendFile(path.resolve(viewPath, 'recap5.html'));
	});
	app.get('/recap6', function (req, res) {
	  res.sendFile(path.resolve(viewPath, 'recap6.html'));
	});
	app.get('/recap7', function (req, res) {
	  res.sendFile(path.resolve(viewPath, 'recap7.html'));
	});
	app.get('/recap8', function (req, res) {
	  res.sendFile(path.resolve(viewPath, 'recap8.html'));
	});
	app.get('/recap9', function (req, res) {
	  res.sendFile(path.resolve(viewPath, 'recap9.html'));
	});
	app.get('/recap10', function (req, res) {
	  res.sendFile(path.resolve(viewPath, 'recap10.html'));
	});

	app.get('/recaps2c1', function (req, res) {
		res.render('recaps2c1');
	});
	
	app.get('/recaps2q1', function (req, res) {
		res.render('recaps2q1');
	});
	
		app.get('/recaps2q2', function (req, res) {
		res.render('recaps2q2');
	});
	
	app.get('/clue5', function (req, res) {
	  res.sendFile(path.resolve(viewPath, 'clue5.html'));
	});
	app.get('/clue8', function (req, res) {
	  res.sendFile(path.resolve(viewPath, 'clue8.html'));
	});
	app.get('/afterparty', function (req, res) {
	  res.render('afterparty');
	});

	app.get('/season1', function (req, res) {
	  res.render('season1', { data: season1Data });
	});

	app.get('/skullomizer', function (req, res) {
	  res.sendFile(path.resolve(viewPath, 'skullomizer/skullomizer.html'));
	});

	app.get('/OCSR6', function (req, res) {
	  res.sendFile(path.resolve(viewPath, 'OCSR6.html'));
	});

	app.get('/popout', function (req, res) {
	  res.sendFile(path.resolve(viewPath, 'popout.html'));
	});
	
	app.use(favicon(__dirname + '/public/images/favicon.ico'));
	app.use(express.static('public'))
	app.use(express.static('files'))


	app.use('*', function (req, res) {
	  res.render('404');
	});

	app.listen(process.env.PORT || 80, function () {
	  console.log('Live at Port 80');
	});
})()
