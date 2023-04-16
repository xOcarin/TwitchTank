const express = require('express');
const app = express();
const tmi = require('tmi.js');

const viewers = [];

const client = new tmi.Client({
  connection: {
    secure: true,
    reconnect: true,
  },
  channels: ['meiyonetta'],
});

client.connect();

client.on('join', (channel, username, self) => {
  if (!self) {
    console.log(`${username} has joined ${channel}`);
    viewers.push(username);
  }
});

client.on('part', (channel, username, self) => {
  if (!self) {
    console.log(`${username} has left ${channel}`);
    const index = viewers.indexOf(username);
    if (index !== -1) {
      viewers.splice(index, 1);
    }
  }
});

setInterval(() => {
  console.log('Viewers:', Array.from(viewers));
}, 5000);

app.get('/viewers', (req, res) => {
  res.json({ viewers: viewers });
});

module.exports = app;
