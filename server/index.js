require('newrelic');
const express = require('express');
// const morgan = require('morgan');
const path = require('path');
// const db = require('../database/index.js');
const carouselDB = require('../database/index.js');

const PORT = 3000 || process.env.PORT;
const app = express();

app.use('/', express.static(path.resolve(__dirname, '..', 'public')));

app.get('/loaderio-4d098e34654c2d1973d1e48888a40a67.html', (req, res) => {
  res.send('loaderio-4d098e34654c2d1973d1e48888a40a67');
});

const PUB_DIR = path.resolve(__dirname, '..', 'public');

app.use('/:id', express.static(PUB_DIR));
// app.use(morgan('dev'));
app.use(express.json());

app.get('*.js', (req, res, next) => {
  req.img += '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.get('/api/homes/:id/images/places', (req, res) => {
  const { id } = req.params;
  const query = `Select * from placesinfo where state_location = (select locationState from primaryRecord where id = ${id}) limit 12`;
  carouselDB.query(query, (err, data) => {
    if (err) {
      console.log('Failed to retrieve data!', err);
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.get('/api/homes/:id/images/activities', (req, res) => {
  // const { id } = req.params;
  const query = 'Select * from activitiesInfo where ratings > 3 limit 18';
  carouselDB.query(query, (err, data) => {
    if (err) {
      console.log('Failed to retrieve data!', err);
      res.sendStatus(500);
    } else {
      console.log('Success');
      res.send(data);
    }
  });
});

// app.get('/api/homes/:id/images/places', (req, res) => {
//   const { id } = req.params;
//   db.fetchPlaceDatabyID(id)
//     .then((queryResult) => {
//       res.send(queryResult);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get('/api/homes/:id/images/activities', (req, res) => {
//   const { id } = req.params;
//   db.fetchActivityDatabyID(id)
//     .then((queryResult) => {
//       res.send(queryResult);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
