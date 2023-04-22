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
  channels: ['gaules'],
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

<<<<<<< Updated upstream
  const currentTime = Date.now();
  Object.keys(lastActive).forEach((displayName) => {
    if (currentTime - lastActive[displayName] > 5000) {
      delete lastActive[displayName];
      const index = displayNames.indexOf(displayName);
      if (index !== -1) {
        displayNames.splice(index, 1);
        viewers = displayNames.slice();
=======
  // Initialize the TMI client
  client = new tmi.Client({
    connection: {
      secure: true,
      reconnect: true,
    },
    channels: [channel],
  });
  console.log("sadhjasdhjjashd: " + channel);

  // Connect the client to the Twitch chat
  client.connect();


  // Handle incoming chat messages
  client.on('message', handleMessage);
  client.on('subscription', (channel, username, methods, message, userstate) => {
  console.log("SOMEONE SUBBED!");
  console.log(`${username} just subscribed to ${channel}`);
  });


  // Read the settings from file
  // Read the settings from file
  let settings = require('./settings.json');

  setInterval(() => {
    delete require.cache[require.resolve('./settings.json')];
    settings = require('./settings.json');
    //console.log("del:" + settings.timeout);
  }, 1000);

  // Update the viewer list every `settings.timeout` milliseconds
  setInterval(() => {
    //console.log("in:" + settings.timeout);
    //console.log("v:" + viewers);
    //console.log("d:" + displayNames);
    viewers = displayNames.slice();
    const currentTime = Date.now();
    Object.keys(lastActive).forEach((displayName) => {
      if (currentTime - lastActive[displayName] > (settings.timeout * 6000)) {
        delete lastActive[displayName];
        const index = displayNames.indexOf(displayName);
        if (index !== -1) {
          displayNames.splice(index, 1);
          viewers = displayNames.slice();
          console.log("chesdasd: " + settings.channel);
        }
>>>>>>> Stashed changes
      }
    }
  });
}, 100);









app.get('/viewers', (req, res) => {
  res.json({ viewers: viewers });
});

module.exports = app;
