const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
  res.render('Home');
});

app.get('/success', (req, res) => {
  res.render('Success');
});

app.get('/students-list', (req, res) => {
  res.render('List');
});

app.post('/add-student', (req, res) => {

  res.redirect('/students-list');
});

// Server
app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} numaralı bağlantı noktasında çalışıyor`);
});