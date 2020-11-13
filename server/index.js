const express = require('express');
const morgan = require('morgan');
const path = require('path');
const db = require('../database/index.js');

const PORT = 3000 || process.env.PORT;
const app = express();
const PUB_DIR = path.resolve(__dirname, '..', 'public');

app.use(express.static(PUB_DIR));
app.use(morgan('dev'));
app.use(express.json());

app.get('/api/home/:id/images/places', (req, res) => {
  const { id } = req.params;
  db.fetchPlaceDatabyID(id)
    .then((queryResult) => {
      res.send(queryResult);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/api/home/:id/images/activities', (req, res) => {
  const { id } = req.params;
  db.fetchActivityDatabyID(id)
    .then((queryResult) => {
      res.send(queryResult);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
