const express = require('express');
const app = express();
const tmi = require('tmi.js');

const displayNames = [];
let viewers = [];
const lastActive = {};

const client = new tmi.Client({
  connection: {
    secure: true,
    reconnect: true,
  },
  channels: ['connoreatspants'],
});

client.connect();

client.on('message', (channel, tags, message, self) => {
  const displayName = tags['display-name'];
  if (!displayNames.includes(displayName)) {
    displayNames.push(displayName);
  }
  lastActive[displayName] = Date.now();
  console.log(`${displayName}: ${message}`);
});

setInterval(() => {
  console.log('Viewers:', Array.from(viewers));
  console.log('Display Names:', displayNames);
  viewers = displayNames.slice();

  const currentTime = Date.now();
  Object.keys(lastActive).forEach((displayName) => {
    if (currentTime - lastActive[displayName] > 90000) {
      delete lastActive[displayName];
      const index = displayNames.indexOf(displayName);
      if (index !== -1) {
        displayNames.splice(index, 1);
        viewers = displayNames.slice();
      }
    }
  });
}, 100);









app.get('/viewers', (req, res) => {
  res.json({ viewers: viewers });
});

module.exports = app;
