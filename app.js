const express = require('express');
const chalk = require('chalk');
const path = require('path');

const app = express();
const port = process.env.PORT || 4242;
const bookRouter = require('./src/routes/bookRouter');

app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/css', express.static(path.join(__dirname, '/public/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/books', bookRouter);

app.get('/', (req, res) => {
  //  res.sendFile(path.join(__dirname, '/views/index.html'));
  res.render('');
});

app.listen(port, () => {
  console.log(`Hey!! I am listening on new port ${chalk.yellow(port)}`);
});
