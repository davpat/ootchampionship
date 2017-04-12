$(document).ready(function(){

    $('.box').css('background-color' , 'rgba(0, 0, 0, 0.60)');

    var audio = document.getElementById('audio');
    var source = document.getElementById('mp3Source');
    audio.volume = 0.1;

    $('.square').click(function () {
        if(!($(this).hasClass("greensquare")) && !($(this).hasClass("redsquare"))){
            $(this).addClass('greensquare');

            if($(this).is("#SongofTime") || $(this).is("#NocturneofShadow")){
              modify_qty(2);
            }
            else {
              modify_qty(1);
            }
        }
        else if ($(this).hasClass("greensquare")) {
          $(this).removeClass('greensquare');
          $(this).addClass("redsquare");

          if($(this).is("#SongofTime") || $(this).is("#NocturneofShadow")){
            modify_qty(-2);
          }
          else {
            modify_qty(-1);
          }
        }
        else if ($(this).hasClass("redsquare")) {
          $(this).removeClass("redsquare");
        }
    });

    $('#ZeldaLullaby').click(function () {
      if ($(this).hasClass("greensquare")) {
        source.src = "sfx/Zelda's Lullaby.mp3";
        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away
      }
      else {
        audio.pause();
        audio.currentTime = 0;
      }
    });
    $('#SariasSong').click(function () {
      if ($(this).hasClass("greensquare")) {
        source.src = "sfx/Saria's Song.mp3";
        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away
      }
      else {
        audio.pause();
        audio.currentTime = 0;
      }
    });
    $('#EponaSong').click(function () {
      if ($(this).hasClass("greensquare")) {
        source.src = "sfx/Epona's Song.mp3";
        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away
      }
      else {
        audio.pause();
        audio.currentTime = 0;
      }
    });
    $('#SunsSong').click(function () {
      if ($(this).hasClass("greensquare")) {
        source.src = "sfx/Sun's Song.mp3";
        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away
      }
      else {
        audio.pause();
        audio.currentTime = 0;
      }
    });
    $('#SongofTime').click(function () {
      if ($(this).hasClass("greensquare")) {
        source.src = "sfx/Song of Time.mp3";
        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away
      }
      else {
        audio.pause();
        audio.currentTime = 0;
      }
    });
    $('#SongofStorms').click(function () {
      if ($(this).hasClass("greensquare")) {
        source.src = "sfx/Song of Storms.mp3";
        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away
      }
      else {
        audio.pause();
        audio.currentTime = 0;
      }
    });
    $('#PreludeofLight').click(function () {
      if ($(this).hasClass("greensquare")) {
        source.src = "sfx/Prelude of Light.mp3";
        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away
      }
      else {
        audio.pause();
        audio.currentTime = 0;
      }
    });
    $('#MinuetofForest').click(function () {
      if ($(this).hasClass("greensquare")) {
        source.src = "sfx/Minuet of Forest.mp3";
        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away
      }
      else {
        audio.pause();
        audio.currentTime = 0;
      }
    });
    $('#BoleroofFire').click(function () {
      if ($(this).hasClass("greensquare")) {
        source.src = "sfx/Bolero of Fire.mp3";
        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away
      }
      else {
        audio.pause();
        audio.currentTime = 0;
      }
    });
    $('#SerenadeofWater').click(function () {
      if ($(this).hasClass("greensquare")) {
        source.src = "sfx/Serenade of Water.mp3";
        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away
      }
      else {
        audio.pause();
        audio.currentTime = 0;
      }
    });
    $('#NocturneofShadow').click(function () {
      if ($(this).hasClass("greensquare")) {
        source.src = "sfx/Nocturne of Shadow.mp3";
        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away
      }
      else {
        audio.pause();
        audio.currentTime = 0;
      }
    });
    $('#RequiemofSpirit').click(function () {
      if ($(this).hasClass("greensquare")) {
        source.src = "sfx/Requiem of Spirit.mp3";
        audio.load(); //call this to just preload the audio without playing
        audio.play(); //call this to play the song right away
      }
      else {
        audio.pause();
        audio.currentTime = 0;
      }
    });
})

function modify_qty(val) {
    var qty = document.getElementById('qty').value;
    var new_qty = parseInt(qty,10) + val;

    if (new_qty < 0) {
        new_qty = 0;
    }

    document.getElementById('qty').value = new_qty;

    if (new_qty == 0) {
      $('#qtyLabel').text("0 / 6");
      $('.box').css('background-color' , 'rgba(0, 0, 0, 0.60)');
    }
    if (new_qty <= 6 && new_qty > 0) {
      $('#qtyLabel').text(new_qty + " / 6");
      $('.box').css('background-color' , 'rgba(0, 0, 80, 0.60)');
    }
    if (new_qty >= 6) {
      $('#qtyLabel').text("6 / 6");
      $('.box').css('background-color' , 'rgba(0, 150, 0, 0.50)');
    }

    return new_qty;
}
