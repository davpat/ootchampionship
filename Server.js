var express = require('express');
var app = express();
const path = require('path');
var viewPath = path.resolve(__dirname, 'views');
var challengeS1Path = path.resolve(__dirname, 'views/challenges/season1/');
var challengeS2Path = path.resolve(__dirname, 'views/challenges/season2/');
var recapS1Path = path.resolve(__dirname, 'views/recap/season1/');
var recapS2Path = path.resolve(__dirname, 'views/recap/season2/');
var recapRound1 = path.resolve(__dirname, 'views/recap/playoff/round1/');
var clueS1Path = path.resolve(__dirname, 'views/clue/season1/');
var clueS2Path = path.resolve(__dirname, 'views/clue/season2/');
var resultS2Path = path.resolve(__dirname, 'views/result/season2/');
var othersPath = path.resolve(__dirname, 'views/others/');
var BattleModeRoomPath = path.resolve(__dirname, 'views/battlemode/');
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
	  next();	
	});
    //////////////// Main Page ////////////////////

	app.get('/', function (req, res) {
	  res.render('index');
	});
	
	app.get('/leaderboard', function (req, res) {
	  res.render('leaderboard', { data: avatars });
	});
	
	app.get('/battlemode', function (req, res) {
	  res.render('battlemode', { data: season2BattleMode });
	});
		
	app.get('/challenges', function (req, res) {
	  res.render('challenges', { data: season2Data });
	});
	
	app.get('/halloffame', function (req, res) {
	  res.render('halloffame', { data: halloffamedata });
	});
	
	app.get('/information', function (req, res) {
	  res.render('information');
	});
	
	app.get('/about', function (req, res) {
	  res.render('about');
	});
	//////////////////////////////////////////////
	///////////////Season 1 /////////////////////
	app.get('/season1', function (req, res) {
	  res.render('season1', { data: season1Data });
	});
	
	app.get('/revision', function (req, res) {
	  res.render('revision');
	});

	app.get('/highlights', function (req, res) {
	  res.render('highlights');
	});
	
	app.get('/recap/season1/race1', function (req, res) {
	  res.sendFile(path.resolve(recapS1Path, 'race1.html'));
	});
	app.get('/recap/season1/race2', function (req, res) {
	  res.sendFile(path.resolve(recapS1Path, 'race2.html'));
	});
	app.get('/recap/season1/race3', function (req, res) {
	  res.sendFile(path.resolve(recapS1Path, 'race3.html'));
	});
	app.get('/recap/season1/race4', function (req, res) {
	  res.sendFile(path.resolve(recapS1Path, 'race4.html'));
	});
	app.get('/recap/season1/race5', function (req, res) {
	  res.sendFile(path.resolve(recapS1Path, 'race5.html'));
	});
	app.get('/recap/season1/race6', function (req, res) {
	  res.sendFile(path.resolve(recapS1Path, 'race6.html'));
	});
	app.get('/recap/season1/race7', function (req, res) {
	  res.sendFile(path.resolve(recapS1Path, 'race7.html'));
	});
	app.get('/recap/season1/race8', function (req, res) {
	  res.sendFile(path.resolve(recapS1Path, 'race8.html'));
	});
	app.get('/recap/season1/race9', function (req, res) {
	  res.sendFile(path.resolve(recapS1Path, 'race9.html'));
	});
	app.get('/recap/season1/race10', function (req, res) {
	  res.sendFile(path.resolve(recapS1Path, 'race10.html'));
	});
	app.get('/clue/season1/clue5', function (req, res) {
	  res.sendFile(path.resolve(clueS1Path, 'clue5.html'));
	});
	app.get('/clue/season1/clue8', function (req, res) {
	  res.sendFile(path.resolve(clueS1Path, 'clue8.html'));
	});
	app.get('/challenges/season1/afterparty', function (req, res) {
		res.render(challengeS1Path + '/afterparty');
	});
	//////////////////////////////////////////////
	////////////////  Season 2 ///////////////////
	app.get('/recap/season2/race1', function(req, res) {
		res.render(recapS2Path + '/race1'); 
	});
	app.get('/recap/season2/quarter1', function (req, res) {
		res.render(recapS2Path + '/quarter1');
	});
	app.get('/recap/season2/quarter2', function (req, res) {
		res.render(recapS2Path + '/quarter2');
	});
	app.get('/recap/season2/quarter3', function (req, res) {
		res.render(recapS2Path + '/quarter3');
	});
	
	app.get('/challenges/season2/R6', function (req, res) {
	  res.sendFile(path.resolve(challengeS2Path, 'R6.html'));
	});
	
	app.get('/challenges/season2/R12', function (req, res) {
	  res.sendFile(path.resolve(challengeS2Path, 'R12.html'));
	});
	
	app.get('/result/season2/race9', function (req, res) {
		res.render(resultS2Path + '/race9', { data: avatars });
	});
	
	app.get('/challenges/season2/R12', function (req, res) {
	  res.sendFile(path.resolve(challengeS2Path, 'R12.html'));
	});
	
	app.get('/challenges/season2/popout', function (req, res) {
		opn(path.resolve(challengeS2Path, 'popout.html'));
	});
	
	//////////////////////////////////////////////
	///////////////BattleMode picker /////////////
	
	app.get('/battlemode/room', function (req, res) {
	  res.render( BattleModeRoomPath + '/room', { data: season2BattleMode });
	});
	
	
	//////////////////////////////////////////////
	///////////////Others ///////////////////////
	app.get('/skullomizer', function (req, res) {
	  res.sendFile(path.resolve(othersPath, 'skullomizer/skullomizer.html'));
	});

	app.get('/adventure', function (req, res) {
	  res.sendFile(path.resolve(othersPath, 'bingoadventure.html'));
	});

	app.get('/popout', function (req, res) {
	  res.sendFile(path.resolve(othersPath, 'popout.html'));
	});
	
	///////Recap////
	app.get('/recap/playoff/round1/Hyp64vsChrisG1', function (req, res) {
		res.sendFile(path.resolve(recapRound1, 'Hyp64vsChrisG1.html'));
	});
	app.get('/recap/playoff/round1/res1', function (req, res) {
		res.sendFile(path.resolve(recapRound1, 'res1.html'));
	});
	app.get('/recap/playoff/round1/res2', function (req, res) {
		res.sendFile(path.resolve(recapRound1, 'res1.html'));
	});
	//////////////////////////////////////////////
	
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
