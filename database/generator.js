// Now that we have our startWriting function defined we can
// finish our generator. Let’s put the whole thing together:

// generator.js
const fs = require('fs');
const faker = require('faker');
const { argv } = require('yargs');

const lines = argv.lines || 10000000;
const filename = argv.output || 'placesData.csv';
const stream = fs.createWriteStream(filename);

const generateRandomListingType = () => {
  const options = [
    `"Entire home"`,
    `"Private room"`,
    `"Room in boutique hotel"`,
    `"Hotel room"`,
    `"Guesthouse"`,
    `"Farm stay"`,
    `"Mansion"`,
    `"Studio"`,
    `"Apartment"`,
    `"Studio apartment"`,
    `"Penthouse"`,
    `"Boathouse"`,
    `"Cabin"`,
    `"Cottage"`,
  ];
  const idx = Math.floor(Math.random() * options.length);
  return options[idx];
};

const padNum = (number, size) => {
  const result = `0000${number}`;
  return result.substr(-size);
};

const generateRandInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

let index = 1;
const create = () => {
  // placeholder for id, database will give us an id
  const counter = generateRandInt(0, 1000);
  const listingid = index;
  const ratings = faker.random.number(5);
  const totalRatings = faker.random.number(1000);
  const usState = faker.address.state();
  const listingType = generateRandomListingType();
  const beds = generateRandInt(2, 6);
  const location = `"${faker.address.city()}, ${usState}"`;
  const price = generateRandInt(50, 200);
  const liked = false;
  const image = `"https://carousel-service-activities-sdc.s3.us-east-2.amazonaws.com/images/${padNum(counter, 4)}.jpg"`;
  index++;
  return `${listingid}|${ratings}|${totalRatings}|${listingType}|${beds}|${location}|${price}|${liked}|${image}\n`;
};

const startWriting = (writeStream, encoding, done) => {
  let i = lines;
  function writing() {
    let canWrite = true;
    do {
      if (i % (Math.floor(lines / 10)) === 10000) {
        console.log(`${i} lines left`);
      }
      i--;
      const placesData = create();
      // check if i === 0 so we would write and call `done`
      if (i === 0) {
        // we are done so fire callback
        writeStream.write(placesData, encoding, done);
      } else {
        // we are not done so don't fire callback
        canWrite = writeStream.write(placesData, encoding);
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
stream.write(`listingid,ratings,totalRatings,listingType,beds,location,price,liked,image\n`, 'utf-8');
// invoke startWriting and pass callback
startWriting(stream, 'utf-8', () => {
  stream.end();
});
