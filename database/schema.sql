drop database carouselServiceDB;

createdb carouselServiceDB;

\c carouselServiceDB;

CREATE TABLE placesInfo (
  id serial,
  ratings int,
  total_ratings int,
  listing_type text,
  beds int,
  place_location text,
  price int,
  linked boolean,
  img text,
);


CREATE TABLE activitiesInfo (
    id serial,
    ratings int,
    total_ratings int,
    activity_name text,
    price money,
    img text,
);