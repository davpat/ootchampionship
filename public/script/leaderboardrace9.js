
var Race9Score = {};
var Info = {};
var Leaderboard = {};

function race9() {
    return $.ajax({
		url: '/scoresboard/Season2/Race9.json',
		method: 'GET'
	}).then(function(data) {
		data.pastraces[0].results.forEach(function(k)
		{
			var place = k.place;
			if(place > 50 && place < 9998)
				place = 50;
				
			Race9Score[k.player] = { name: k.player, value: k.points };
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
		
			var TwitchData = search(k.channel, Avatars);
			console.log(k.channel + TwitchData);			
			
			if(TwitchData)
			{
				if(TwitchData.logo)
				{
					if(TwitchData.bio)
					{
						Info[k.name] = { name: k.name, country: k.country, channel: k.channel , twitter: k.twitter , youtube: k.youtube, logo: TwitchData.logo, bio: TwitchData.bio};
					}
					else
					{
						Info[k.name] = { name: k.name, country: k.country, channel: k.channel , twitter: k.twitter , youtube: k.youtube, logo: TwitchData.logo, bio: '♿ No Biography ♿'};
					}
				}	
				else
				{
					Info[k.name] = { name: k.name, country: k.country, channel: k.channel , twitter: k.twitter , youtube: k.youtube, logo: 'images/default.png', bio: '♿ No Biography ♿' 	};
				}
			}
			else
			{
				Info[k.name] = { name: k.name, country: k.country, channel: k.channel , twitter: k.twitter , youtube: k.youtube, logo: 'images/default.png', bio: '♿ No Biography ♿'};
			}

		});
	});
}

function search(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if ( myArray[i].name === nameKey || myArray[i].display_name === nameKey) {
            return myArray[i];
        }
    }
}

$.when(race9()).done(function(a1, a2, a3, a4, a5 , a6, a7, a8, a9, a10)
{	
	Object.keys(Race9Score).forEach(function(key) 
	{
    	if(Leaderboard[key])
		{
			Leaderboard[key].value = Leaderboard[key].value + Race9Score[key].value;
			Leaderboard[key].nraces = Leaderboard[key].nraces + 1;
		}
		else
		{
			Leaderboard[key] = Race9Score[key];
			Leaderboard[key].nraces = 	1;
		}
	});
	$.when(info()).done(function(a1)
	{
			
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
			Info[Leaderboard[k].name]
			k = keys[i];
			if(SameValue != Leaderboard[k].value)
			{
				rank++;
			}
			if(Info[Leaderboard[k].name])
			{
				if(Info[Leaderboard[k].name].channel != '')
				{
					if(Info[Leaderboard[k].name].youtube != '')
					{
						if(Info[Leaderboard[k].name].twitter != '')
						{	
							$('#ScoresboardTable').append('<tr><td class="leaderboard-td"><b>' + rank + "</b></td>" +
												  '<td><b><a target="_blank" href="https://www.twitch.tv/'  + Info[Leaderboard[k].name].channel + '">' +  Leaderboard[k].name[0].toUpperCase()  + Leaderboard[k].name.substring(1) + '</a></b></td>' + 												  "<td><b>" +  Info[Leaderboard[k].name].country   + "</b></td>" +
														  "<td><b>" +  Leaderboard[k].value 				  + "</b></td></tr>");
						}
						else
						{	
							$('#ScoresboardTable').append('<tr><td class="leaderboard-td"><b>' + rank + "</b></td>" +
												  '<td><b><a target="_blank" href="https://www.twitch.tv/'  + Info[Leaderboard[k].name].channel + '">' +  Leaderboard[k].name[0].toUpperCase()  + Leaderboard[k].name.substring(1) + '</a></b></td>' + 												  "<td><b>" +  Info[Leaderboard[k].name].country   + "</b></td>" +
														  "<td><b>" +  Leaderboard[k].value 				  + "</b></td></tr>");
						}
					}
					else
					{
						if(Info[Leaderboard[k].name].twitter != '')
						{	
							$('#ScoresboardTable').append('<tr><td class="leaderboard-td"><b>' + rank + "</b></td>" +
												  '<td><b><a target="_blank" href="https://www.twitch.tv/'  + Info[Leaderboard[k].name].channel + '">' +  Leaderboard[k].name[0].toUpperCase()  + Leaderboard[k].name.substring(1) + '</a></b></td>' + 												  "<td><b>" +  Info[Leaderboard[k].name].country   + "</b></td>" +
														  "<td><b>" +  Leaderboard[k].value 				  + "</b></td></tr>");
						}
						else
						{
							$('#ScoresboardTable').append('<tr><td class="leaderboard-td"><b>' + rank + "</b></td>" +
												  '<td><b><a target="_blank" href="https://www.twitch.tv/'  + Info[Leaderboard[k].name].channel + '">' +  Leaderboard[k].name[0].toUpperCase()  + Leaderboard[k].name.substring(1) + '</a></b></td>' + 
														  "<td><b>" +  Info[Leaderboard[k].name].country 	  + "</b></td>" +
														  "<td><b>" +  Leaderboard[k].value 				  + "</b></td></tr>");
						}
					}	
				}	
				else
				{
					$('#ScoresboardTable').append('<tr><td class="leaderboard-td"><b>' + rank + "</b></td>" +
												  '<td title="'+ Info[Leaderboard[k].name].bio +'"><img src="images/default.png" height="26" width="26" style="margin-right:10px;"><b>' +  Leaderboard[k].name[0].toUpperCase()  + Leaderboard[k].name.substring(1) + 
												  "<td><b>" +  Info[Leaderboard[k].name].country 	  + "</b></td>" +
											      "<td><b>" +  Leaderboard[k].value 				  + "</b></td></tr>");
				}	
			}	
			SameValue = Leaderboard[k].value;
		}
	});
});