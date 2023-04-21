const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');

app.use(express.static(__dirname));

let viewers = [];

app.get('/viewers', async (req, res) => {
  res.json({ viewers });
});

setInterval(async () => {
  try {
    const response = await fetch('http://localhost:8000/viewers');
    const data = await response.json();
    viewers = data.viewers;
    //console.log("HERE:::::::    " + viewers);
  } catch (error) {
    console.error("Error fetching viewers:");
  }
}, 50);

module.exports = app;
