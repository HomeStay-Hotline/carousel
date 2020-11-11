const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/carousel');

const placesSchema = new mongoose.Schema({
    id: Number,
    info: [{
      rating: Number,
      listing_type: String,
      beds: Number,
      location: String,
      price: Number,
      liked: Boolean,
      url: String
    }],
  });
  
  const activitiesSchema = new mongoose.Schema({
    id: Number,
    info: [{
      rating: Number,
      activity_name: String,
      price: Number,
      url: String
    }],
  });
    
const Places = mongoose.model('places', placesSchema);
const Activities = mongoose.model('activities', activitiesSchema);
