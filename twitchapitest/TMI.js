const express = require('express');
const app = express();
const tmi = require('tmi.js'); // add this line

const viewers = [];

app.get('/viewers', (req, res) => {
  res.json({ viewers: viewers.length });
});

const client = new tmi.Client({
  connection: {
    secure: true,
    reconnect: true,
  },
  channels: ['michaelbryan'], // replace with your channel name
});

client.connect();

client.on('join', (channel, username, self) => {
  if (!self) {
    console.log(`${username} has joined ${channel}`);
    viewers.push(username); // add the username to the viewers array
  }
});

client.on('part', (channel, username, self) => {
  if (!self) {
    console.log(`${username} has left ${channel}`);
    const index = viewers.indexOf(username);
    if (index !== -1) {
      viewers.splice(index, 1); // remove the username from the viewers array
    }
  }
});

setInterval(() => {
  console.log('Viewers:', Array.from(viewers));
}, 5000); // log viewers every 5 seconds

app.listen(8000, () => {
  console.log('Twitch server running on http://localhost:8000');
});
