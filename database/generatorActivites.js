// Now that we have our startWriting function defined we can
// finish our generator. Let’s put the whole thing together:

// generator.js
const fs = require('fs');
const faker = require('faker');
const { argv } = require('yargs');

const lines = argv.lines || 10;
const filename = argv.output || 'placesData.csv';
const stream = fs.createWriteStream(filename);

const padNum = (number, size) => {
  const result = `0000${number}`;
  return result.substr(-size);
};

const generateRandInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const create = () => {
  // placeholder for id, database will give us an id
  let counter = 1;
  let index = 1;
  while (index < 100) {
    const id = index;
    const ratings = faker.random.number(5);
    const totalRatings = faker.random.number(1000);
    const activityName = faker.lorem.sentence();
    const price = generateRandInt(50, 200);
    const image = `https://carousel-service-sdc.s3.us-east-2.amazonaws.com/images/${padNum(counter, 4)}.jpg`;
    counter++;
    index++;
    return `${id},${ratings},${totalRatings},${activityName},${price},${image}\n`;
  }
};

const startWriting = (writeStream, encoding, done) => {
  let i = lines;
  function writing() {
    const canWrite = true;
    do {
      i--;
      const placesData = create();
      // check if i === 0 so we would write and call `done`
      if (i === 0) {
        // we are done so fire callback
        writeStream.write(placesData, encoding, done);
      } else {
        // we are not done so don't fire callback
        writeStream.write(placesData, encoding);
      }
    // else call write and continue looping
    } while (i > 0 && canWrite);
    if (i > 0 && !canWrite) {
    // our buffer for stream filled and need to wait for drain
    // Write some more once it drains.
      writeStream.once('drain', writing);
    }
  }
  writing();
};

// write our `header` line before we invoke the loop
// eslint-disable-next-line quotes
stream.write(`id, ratings, totalRatings, activityName, price, image\n`, 'utf-8');
// invoke startWriting and pass callback
startWriting(stream, 'utf-8', () => {
  stream.end();
});
