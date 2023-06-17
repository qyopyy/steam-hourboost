const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js');

const username = process.env.username;
const password = process.env.password;

const games = [730, 1366800];  // Enter here AppIDs of the desired games
const status = 1;  // 1 - online, 7 - invisible
const hideRecentActivity = true;  // Set to true to hide recent activity

const user = new SteamUser();
user.logOn({
  "accountName": username,
  "password": password,
});

user.on('loggedOn', () => {
  console.log(user.steamID.getSteam3RenderedID() + ' - Successfully logged on');

  user.setPersona(status);  // Set the persona status

  // Set the games you want to play
  user.gamesPlayed(games);

  if (hideRecentActivity) {
    user.requestFreeLicense(games);  // Hide recent activity
  }
});

keep_alive();  // Keep the script running

