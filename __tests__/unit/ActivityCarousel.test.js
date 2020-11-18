import React from 'react';
import { shallow, mount } from 'enzyme';
import ActivityCarousel from '../../client/src/components/ActivityCarousel';
import ActivityCard from '../../client/src/components/ActivityCard';

describe('PlaceCarousel', () => {
  it('should exist', () => {
    const wrapper = shallow(<ActivityCarousel />);
    expect(wrapper.find('.activity-carousel-comp').exists()).toBe(true);
  });
  it('should render 6 child image cards at a time', () => {
    const wrapper = mount(<ActivityCarousel />);
    expect(wrapper.find(ActivityCard)).toHaveLength(6);
  });
});
