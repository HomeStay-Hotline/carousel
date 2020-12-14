const fs = require('fs');
const { argv } = require('yargs');
const faker = require('faker');

const lines = argv.lines || 10000000;
const filename = argv.output || 'primaries.csv';
const stream = fs.createWriteStream(filename);

let index = 1;
const create = () => {
  for (let i = 0; i < 100; i++) {
    const id = index;
    const locationState = `${faker.address.state()}`;
    index++;
    return `${id}|${locationState}\n`;
  }
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
stream.write(`id|location\n`, 'utf-8');
// invoke startWriting and pass callback
startWriting(stream, 'utf-8', () => {
  stream.end();
});
