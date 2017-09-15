
var pointsDistribution = {};
pointsDistribution["1"] = 200;
pointsDistribution["2"] = 175;
pointsDistribution["3"] = 160;
pointsDistribution["4"] = 150;
pointsDistribution["5"] = 140;
pointsDistribution["6"] = 132;
pointsDistribution["7"] = 125;
pointsDistribution["8"] = 118;
pointsDistribution["9"] = 111;
pointsDistribution["10"] = 105;
pointsDistribution["11"] = 100;
pointsDistribution["12"] = 95;
pointsDistribution["13"] = 90;
pointsDistribution["14"] = 85;
pointsDistribution["15"] = 80;
pointsDistribution["16"] = 75;
pointsDistribution["17"] = 70;
pointsDistribution["18"] = 66;
pointsDistribution["19"] = 62;
pointsDistribution["20"] = 58;
pointsDistribution["21"] = 54;
pointsDistribution["22"] = 50;
pointsDistribution["23"] = 46;
pointsDistribution["24"] = 43;
pointsDistribution["25"] = 40;
pointsDistribution["26"] = 37;
pointsDistribution["27"] = 34;
pointsDistribution["28"] = 31;
pointsDistribution["29"] = 28;
pointsDistribution["30"] = 25;
pointsDistribution["31"] = 22;
pointsDistribution["32"] = 20;
pointsDistribution["33"] = 18;
pointsDistribution["34"] = 16;
pointsDistribution["35"] = 15;
pointsDistribution["36"] = 14;
pointsDistribution["37"] = 13;
pointsDistribution["38"] = 12;
pointsDistribution["39"] = 11;
pointsDistribution["40"] = 10;
pointsDistribution["41"] = 10;
pointsDistribution["42"] = 9;
pointsDistribution["43"] = 9;
pointsDistribution["44"] = 8;
pointsDistribution["45"] = 8;
pointsDistribution["46"] = 7;
pointsDistribution["47"] = 7;
pointsDistribution["48"] = 6;
pointsDistribution["49"] = 6;
pointsDistribution["50"] = 5;
pointsDistribution["9998"] = 0;

var Race1Score = {};
var Race2Score = {};
var Race3Score = {};
var Info = {};
var Leaderboard = {};

function race1() {
    return $.ajax({
		url: '/scoresboard/Season2/Race1.json',
		method: 'GET'
	}).then(function(data) {
		data.pastraces[0].results.forEach(function(k)
		{
			var place = k.place;
			if(place > 50 && place < 9998 )
				place = 50;
				
			Race1Score[k.player] =  { name: k.player, value: pointsDistribution[place.toString()] };
			
		});
	});
}

function moreInfo() {
    return $.ajax({
		url: '/scoresboard/Season2/Race1.json',
		method: 'GET'
	}).then(function(data) {
		data.pastraces[0].results.forEach(function(k)
		{
			var place = k.place;
			if(place > 50 && place < 9998 )
				place = 50;
				
			Race1Score[k.player] =  { name: k.player, value: pointsDistribution[place.toString()] };
			
		});
	});
}

function race2() {
    return $.ajax({
		url: '/scoresboard/Season2/Race2.json',
		method: 'GET'
	}).then(function(data) {
		data.pastraces[0].results.forEach(function(k)
		{
			var place = k.place;
			if(place > 50 && place < 9998)
				place = 50;
				
			Race2Score[k.player] = { name: k.player, value: pointsDistribution[place.toString()] };
			
		});
	});
}

function race3() {
    return $.ajax({
		url: '/scoresboard/Season2/Race3.json',
		method: 'GET'
	}).then(function(data) {
		data.pastraces[0].results.forEach(function(k)
		{
			var place = k.place;
			if(place > 50 && place < 9998)
				place = 50;
				
			Race3Score[k.player] = { name: k.player, value: pointsDistribution[place.toString()] };
		});
	});
}
		
function info() {
    return $.ajax({
		url: '/scoresboard/ParticipantInfo.json',
		method: 'GET'
	}).then(function(data) {
		data.participant.forEach(function(k)
		{
			Info[k.name] = { name: k.name, country: k.country, channel: k.channel , twitter: k.twitter , youtube: k.youtube};
		});
	});
}

$.when(race1(), race2(), race3()).done(function(a1, a2, a3, a4)
{
	
	Object.keys(Race1Score).forEach(function(key) 
	{
    	if(Leaderboard[key])
		{
			Leaderboard[key].value = Leaderboard[key].value + Race1Score[key].value; 
			Leaderboard[key].nraces = Leaderboard[key].nraces + 1;
		}
		else
		{
			Leaderboard[key] = Race1Score[key];
			Leaderboard[key].nraces = 1;
		}
	});
	Object.keys(Race2Score).forEach(function(key) 
	{
    	if(Leaderboard[key])
		{
			Leaderboard[key].value = Leaderboard[key].value + Race2Score[key].value;
			Leaderboard[key].nraces = Leaderboard[key].nraces + 1;
		}
		else
		{
			Leaderboard[key] = Race2Score[key];
			Leaderboard[key].nraces = 1;
		}
	});
	Object.keys(Race3Score).forEach(function(key) 
	{
    	if(Leaderboard[key])
		{
			Leaderboard[key].value = Leaderboard[key].value + Race3Score[key].value;
			Leaderboard[key].nraces = Leaderboard[key].nraces + 1;
		}
		else
		{
			Leaderboard[key] = Race3Score[key];
			Leaderboard[key].nraces = 	1;
		}
	});
	
	$.when(info()).done(function(a1)
	{
		console.log(Info);
			
		var keys = [], k, i, len;
		for (k in Leaderboard) 
		{
		  if (Leaderboard.hasOwnProperty(k)) 
		  {
			keys.push(k);
		  }
		}
		keys.sort(function(a, b) {
			return Leaderboard[b].value - Leaderboard[a].value;
		});

		len = keys.length;
		var rank = 0;
		var SameValue = -1;
		for (i = 0; i < len; i++) 
		{
			
			k = keys[i];
			if(SameValue != Leaderboard[k].value)
			{
				rank++;
			}
			if(Info[Leaderboard[k].name])
			{
				if(Info[Leaderboard[k].name].channel != '')
				{
					$('#ScoresboardTable').append("<tr><td><b>" + rank + "</b></td>" +
												  '<td><b><img style="width:32px;height:32px;" src="images/PlayersIcone/exodus.png"></img></td>' +
												  "<td><b>"+ '<a target="_blank" href="https://www.twitch.tv/'  + Info[Leaderboard[k].name].channel + '">' +  Leaderboard[k].name[0].toUpperCase()  + Leaderboard[k].name.substring(1) + "</a></b></td>" + 
												  "<td><b>" +  Info[Leaderboard[k].name].country 	   + "</b></td>" +
												  "<td><b>" +  Leaderboard[k].value 				   + "</b></td>" + 
												  "<td><b>" +  Leaderboard[k].nraces 				   + "</b></td></tr>");
				}	
				else
				{
					$('#ScoresboardTable').append('<tr style="width:32px;height:32px;"><td><b>' + rank + "</b></td>" +
												  '<td><b><img style="width:32px;height:32px;" src="images/PlayersIcone/exodus.png"></img></td>' +
												  '<td><b>'  +  Leaderboard[k].name[0].toUpperCase()  + Leaderboard[k].name.substring(1) + "</b></td>" + 
												  "<td><b>" +  Info[Leaderboard[k].name].country 	   + "</b></td>" +
												  "<td><b>" +  Leaderboard[k].value 				   + "</b></td>" + 
												  "<td><b>" +  Leaderboard[k].nraces 				   + "</b></td></tr>");
				}	
			}
			else
			{
							$('#ScoresboardTable').append("<tr><td><b>" + rank + "</b></td>" +
											'<td><b><img style="width:32px;height:32px;" src="images/PlayersIcone/exodus.png"></img></td>' +
												"<td><b>" +  Leaderboard[k].name[0].toUpperCase()  + Leaderboard[k].name.substring(1) + "</b></td>" + 
												"<td><b>" +  "" 	   							   + "</b></td>" +
												"<td><b>" +  Leaderboard[k].value 				   + "</b></td>" + 
												"<td><b>" +  Leaderboard[k].nraces 				   + "</b></td></tr>");
			}	
			SameValue = Leaderboard[k].value;
		}
	});
});