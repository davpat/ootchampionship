const fetch = require('node-fetch');

module.exports = async function() {
  var users = ['amateseru','marco8641','Bonooru_','tob3000','Exodus122','Juwk','hyperion64','runnerguy2489','realtimeattack64','phoenixfeather1','scaramangado','psymarth','blinkzy','gregortixlkyns','Chris7','jenslang','gombill','gombill','dannyb21892','flofloo2217','mrbubbleskp','armorysons','flanthis','acermax','adefgames','xanra','sonfloro','bou_frost','oxxyga','thecowness','alaris_villain','doctorkillmd','menou_','thiefbug','TitouKay','MarshallObob','kintefleush','ziranui','matttinthehat','moosecrap','mrjabujabu','elsloth90','blancalamb','aliensqueakytoy','seadan','luigidude851','Tasslehoff9566','quickkiran','nkitten','silentknight115','trisscorp','fig02','letsklay','f1gure8','remidemmi','numberplay','coffeerunner1','cosmia_','metaknight3000','nonsensebread','kaylabee17','optimusprimemini','jolin012','fenyan','sanzeau','lauren07','cook99999','revivaal_','akalster','kpl389','nupperz_','SeedBorn','finappie','bloodduster','zemorn','Mephisto_DCIX','sjorec','spamminn','mrcodgrim','gmanxxxx','ostrealava02','Lance47','linky628','spoo3','crimtab','smokercb','lulz334','rosewater0','THags15','haru','DLH112','woawkoaw','teh_squirrel','wannabe_weeb99','arandomclown','arontoad99','sniping117','piti','giuocob','spleff']; 
  //'mindezzy','tenari_iranet'
  const request = await fetch(
    `https://api.twitch.tv/kraken/users?login=${users.join(',')}&client_id=883frpt6tw99y0b448zu8wkcigp594`,
    {
      headers: {
        Accept: 'application/vnd.twitchtv.v5+json',
      },
    },
  );
  //'haru'
  const json = await request.json();
  return json.users.map(user => user);
}