import React from 'react';
import { shallow, mount } from 'enzyme';
import ActivityCard from '../../client/src/components/ActivityCard';

const exampleData = {
  _id: '5fae166e933b5709e66273db',
  rating: 4.55,
  activity_name: 'random activity',
  price: 20,
  total_ratings: 20,
  url: 'https://loremflickr.com/320/240/house',
};

describe('PlaceCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ActivityCard activity={exampleData} />);
  });

  it('should exist', () => {
    // const wrapper = shallow(<ActivityCard activity={exampleData} />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should call the change heart icon color function on click', () => {
    // const wrapper = shallow(<ActivityCard activity={exampleData} />);
    const heartIconContainer = wrapper.find('.a-heart-container');
    heartIconContainer.simulate('click');
    // this .find() NEEDS to happen AFTER the click event otherwise it is not updated w state change
    const heartIcon = wrapper.find('.activity-heart-icon');
    expect(heartIcon.prop('style')).toHaveProperty('background', 'red');
  });
});
