const fetch = require('node-fetch');

module.exports = async function(users) {
  const request = await fetch(
    `https://api.twitch.tv/kraken/users?login=${users.join(',')}&client_id=883frpt6tw99y0b448zu8wkcigp594`,
    {
      headers: {
        Accept: 'application/vnd.twitchtv.v5+json',
      },
    },
  );
  const json = await request.json();
  return json.users.map(user => user.logo);
}