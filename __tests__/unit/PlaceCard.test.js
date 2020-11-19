import React from 'react';
import { shallow, mount } from 'enzyme';
import PlaceCard from '../../client/src/components/PlaceCard';

const exampleData = {
  _id: '5fae166e933b5709e66273db',
  rating: 4.55,
  listing_type: 'room in boutique hotel',
  beds: 6,
  location: 'East Gillianfort, New Jersey',
  price: 64,
  liked: false,
  total_ratings: 6,
  url: 'https://loremflickr.com/320/240/house',
};

const exampleData2 = {
  _id: '5fae166e933b5709e66273db',
  rating: 4.55,
  listing_type: 'room in boutique hotel',
  beds: 6,
  location: 'East Gillianfort, New Jersey',
  price: 65,
  liked: false,
  total_ratings: 6,
  url: 'https://loremflickr.com/320/240/house',
};

describe('PlaceCard', () => {
  // let wrapper;
  // beforeEach(() => {
  //   wrapper = shallow(<PlaceCard place={exampleData} />);
  // });
  it('should exist', () => {
    const wrapper = shallow(<PlaceCard place={exampleData} />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should call the change heart icon color function on click', () => {
    const wrapper = shallow(<PlaceCard place={exampleData} />);
    const heartIconContainer = wrapper.find('.a-heart-container');
    heartIconContainer.simulate('click');
    // this .find() NEEDS to happen AFTER the click event otherwise it is not updated w state change
    const heartIcon = wrapper.find('.place-heart-icon');
    expect(heartIcon.prop('style')).toHaveProperty('background', 'red');
  });
  it('should correctly assign superhost status', () => {
    const wrapper = shallow(<PlaceCard place={exampleData2} />);
    expect(wrapper.find('.superhost-icon').exists()).toBe(false);
  });
});

// {place.price % 2 === 0 ? <div className="superhost-icon">SUPERHOST</div> : ''}
