const faker = require('faker');
const db = require('./index.js');

const generateRandFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2);

const generateRandInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateRandomListingType = () => {
  const options = [
    'entire home',
    'private room',
    'room in boutique hotel',
    'hotel room',
    'guesthouse',
    'farm stay',
    'mansion',
    'studio',
    'apartment',
    'studio apartment',
    'penthouse',
    'boathouse',
    'cabin',
    'cottage',
  ];
  const idx = Math.floor(Math.random() * options.length);
  return options[idx];
};

const seedingPlaces = () => {
  for (let i = 1; i <= 100; i++) {
    const data = { id: i, info: [] };
    const usState = faker.address.state(); // keep state constant for a view
    for (let j = 0; j < 12; j++) {
      const infoObj = {
        rating: generateRandFloat(3.5, 5),
        listing_type: generateRandomListingType(),
        beds: generateRandInt(1, 6),
        location: `${faker.address.city()}, ${usState}`,
        price: generateRandInt(50, 200),
        liked: false,
        url: 'https://loremflickr.com/320/240/house',
      };
      data.info.push(infoObj);
    }
    db.createPlaceDoc(data);
  }
};

const seedingActivities = () => {
  for (let i = 1; i <= 100; i++) {
    const data = { id: i, info: [] };
    for (let j = 0; j < 12; j++) {
      const infoObj = {
        rating: generateRandFloat(3.5, 5),
        activity_name: faker.lorem.sentence(),
        price: generateRandInt(5, 30),
        url: 'https://loremflickr.com/320/240/vacation',
      };
      data.info.push(infoObj);
    }
    db.createActivityDoc(data);
  }
};

seedingPlaces();
seedingActivities();

module.exports.seedingPlaces = seedingPlaces;
module.exports.seedingActivities = seedingActivities;
