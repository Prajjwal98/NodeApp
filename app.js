const express = require('express');
const chalk = require('chalk');
const path = require('path');

const app = express();

const port = process.env.PORT || 4242;
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});
app.listen(port, () => {
  console.log(`Hey!! I am listening on new port ${chalk.yellow(port)}`);
});
