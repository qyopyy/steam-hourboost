# Steam Hour Boost!
Steam Game Hour Boost with hide recent activity! 24/7

<span><a href="[https://replit.com/@qyopy/Steam-Hour-Booster](https://replit.com/@qyopy/Steam-Hour-Booster)" title="Run on Replit badge"><img src="https://replit.com/badge/github/replit/Steam-Hour-Booster" alt="Run on Replit badge" /></a></span>

### Usage

```ts
const SteamUser = require('steam-user');
const SteamTotp = require('steam-totp');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const username = process.env.username;
const password = process.env.password;

const games = [730, 1366800, 440];  // Enter here AppIDs of the desired games
const status = 7;  // 1 - online, 7 - invisible
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

app.get('/', (req, res) => {
  res.send('Steam farming bot is running.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


```
