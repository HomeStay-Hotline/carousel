const db = require('./index.js');
const faker = require('faker');

const generateRandFloat = (min, max) => {
    // so 
    return (Math.random() * (max - min) + min).toFixed(2);
};

const generateRandInt = (min, max) => {
    // so
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
        'cottage'
    ];
    let idx = Math.floor(Math.random() * options.length);
    return options[idx];
}


const seedingPlaces = () => {
    for (let i = 1; i <= 100; i++) {
        let data = {id: i, info: []}
        let usState = faker.address.state(); // keep state constant for a view
        for (let j = 0; j < 12; j++) {
            let infoObj = {
                rating: generateRandFloat(3.5, 5),
                listing_type: generateRandomListingType(),
                beds: generateRandInt(1, 6),
                location: `${faker.address.city()}, ${usState}`,
                price: generateRandInt(50, 200),
                liked: false,
                url: 'https://loremflickr.com/320/240/house'
            }
            data.info.push(infoObj)
        }
        db.createPlaceDoc(data);
    }
};

const seedingActivities = () => {
    for (let i = 1; i <= 100; i++) {
        let data = {id: i, info: []}
        for (let j = 0; j < 12; j++) {
            let infoObj = {
                rating: generateRandFloat(3.5, 5),
                listing_type: faker.lorem.sentance,
                price: generateRandInt(5, 30),
                url: 'https://loremflickr.com/320/240/vacation'
            }
            data.info.push(infoObj)
        }
        db.createActivityDoc(data);
    }
};

seedingPlaces();
seedingActivities();
