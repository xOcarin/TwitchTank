const express = require('express');
const app = express();
const fetch = require('node-fetch');

app.use(express.static(__dirname));

let viewers = 0;

app.get('/viewers', async (req, res) => {
  res.send(`Current viewers: ${viewers}`);
});

setInterval(async () => {
  const response = await fetch('http://localhost:8000/viewers');
  const data = await response.json();
  viewers = data.viewers;
  console.log("HERE:::::::    " + viewers);
}, 5000); // fetch data every 5 seconds

app.listen(3000, function() {
  console.log('Server running on http://localhost:3000');
});
