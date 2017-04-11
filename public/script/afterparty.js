$(document).ready(function(){

    var audio = document.getElementById('audio');
    var source = document.getElementById('mp3Source');
    audio.volume = 0.2;

    $('#ZeldaLullaby').click(function () {
        source.src = "sfx/Zelda's Lullaby.mp3";
        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away
    });
    $('#SariasSong').click(function () {
        source.src = "sfx/Saria's Song.mp3";
        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away
    });
    $('#EponaSong').click(function () {
        source.src = "sfx/Epona's Song.mp3";
        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away
    });
    $('#SunsSong').click(function () {
        source.src = "sfx/Sun's Song.mp3";
        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away
    });
    $('#SongofTime').click(function () {
        source.src = "sfx/Song of Time.mp3";
        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away
    });
    $('#SongofStorms').click(function () {
        source.src = "sfx/Song of Storms.mp3";
        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away
    });
    $('#PreludeofLight').click(function () {
        source.src = "sfx/Prelude of Light.mp3";
        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away
    });
    $('#MinuetofForest').click(function () {
        source.src = "sfx/Minuet of Forest.mp3";
        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away
    });
    $('#BoleroofFire').click(function () {
        source.src = "sfx/Bolero of Fire.mp3";
        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away
    });
    $('#SerenadeofWater').click(function () {
        source.src = "sfx/Serenade of Water.mp3";
        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away
    });
    $('#NocturneofShadow').click(function () {
        source.src = "sfx/Nocturne of Shadow.mp3";
        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away
    });
    $('#RequiemofSpirit').click(function () {
        source.src = "sfx/Requiem of Spirit.mp3";
        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away
    });

    $('.square').click(function () {
        $(this).addClass('greensquare');
    });

})
