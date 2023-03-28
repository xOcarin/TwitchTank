const tmi = require('tmi.js');
require('dotenv').config();

const client = new tmi.Client({
  connection: {
    secure: true,
    reconnect: true,
  },
  channels: ['michaelbryan'], // replace with your channel name
});

const viewers = [];

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

module.exports = { viewers };