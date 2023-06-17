const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js');

var username = process.env.username;
var password = process.env.password;
var shared_secret = process.env.shared_secret;

var games = [730, 1366800];  // Enter here AppIDs of the needed games
var status = 7;  // 1 - online, 7 - invisible
var hideRecentActivity = true;  // Set to true to hide recent activity

user = new steamUser();
user.logOn({
  "accountName": username,
  "password": password,
  "twoFactorCode": steamTotp.generateAuthCode(shared_secret)
});

user.on('loggedOn', () => {
  if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');

  user.setPersona(status);  // Set the persona status

  // Set the games you want to play
  user.gamesPlayed(games);

  if (hideRecentActivity) {
    user.gamesPlayed([]);  // Hide recent activity
  }
});
