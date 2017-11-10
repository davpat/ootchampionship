var currentZone;
var game;

function loadGame(gameString)
{
	currentZone = 0;
    game = JSON.parse(gameString);
    setZones(game.Zones[currentZone].BackgroundImage);
	
}
var TextHelper = new textHelper();

function setZones(path)
{
    document.getElementById("scene").style.backgroundImage = "url('" + path + "')";
	setZonesGoal(game.Zones[currentZone].Goal[0]);
}

function textHelper() { // constructor function
    this.cptLines = 0; // Public variable
}

function setZonesGoal(text)
{
	var goals = document.createElement('div');
	for(var k in text) 
	{
		var g = document.createElement('div');
		g.id = k;
		g.innerHTML = k + " : " + text[k];
		goals.appendChild(g);
	}
	document.getElementById("goal").appendChild(goals);
}

function setMusic(path) {
    var audio = document.getElementById('audio');
    var source = document.getElementById('mp3Source');
    source.src = path;

    audio.load(); //call this to just preload the audio without playing
    audio.play(); //call this to play the song right away
}
