/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const data = require('../data/index.js');

const app = express();
const PORT = 3030;
const staticPath = path.resolve(__dirname, '..', 'client', 'dist');

app.use(express.json());
app.use('/', express.static(staticPath));

app.get('/get', (req, res) => {
  const { name } = req.query;
  if (name && name.length > 0) {
    res.end(JSON.stringify(data.getByName(name)));
  } else {
    res.end(JSON.stringify(data.getAll()));
  }
});

app.listen(process.env.PORT, '0.0.0.0', (err) => {
  if (err) {
    console.log('Error at server/index.js: listener');
  } else {
    console.log(`Listening on port ${PORT}`);
  }
});
