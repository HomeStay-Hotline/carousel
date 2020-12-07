const fs = require('fs');
const axios = require('axios');
const path = require('path');

const PATH = path.join(__dirname);
const url = 'https://loremflickr.com/267/200/activities';

const padNum = (number, size) => {
  const result = `0000000${number}`;
  return result.substr(-size);
};

const getImage = (fileName) => {
  const WRITE_PATH = path.join(PATH, 'activities', `${fileName}.jpg`);
  axios.get(url, { responseType: 'stream' })
    .then((response) => {
      const stream = response.data;
      return stream.pipe(fs.createWriteStream(WRITE_PATH));
    })
    .catch((err) => console.log(err));
};

const downloadImages = (times) => {
  let timer = 0;

  for (let counter = 0; counter < times; counter++) {
    const fileName = padNum(counter, 3);
    setTimeout(() => getImage(fileName), timer);
    timer += 2000;
  }
};

downloadImages(1000);
