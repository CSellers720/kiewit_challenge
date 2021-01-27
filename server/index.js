const express = require('express');
const path = require('path');

const app = express();
const PORT = 3030;
const staticPath = path.resolve(__dirname, '..', 'client', 'dist');

app.use(express.json());
app.use('/', express.static(staticPath));

app.listen(PORT, 'localhost', (err) => {
  if (err) {
    console.log('Error at server/index.js: listener');
  } else {
    console.log(`Listening on port ${PORT}`);
  }
});
