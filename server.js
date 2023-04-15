const express = require('express');
const app = express();
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
    console.log("HERE:::::::    " + viewers);
  } catch (error) {
    console.error("Error fetching viewers:", error);
  }
}, 1000);

app.listen(3000, function() {
  console.log('Server running on http://localhost:3000');
});
