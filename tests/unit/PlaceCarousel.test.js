import React from 'react';
import { shallow, mount } from 'enzyme';
import PlaceCarousel from '../../client/src/components/PlaceCarousel';
import PlaceCard from '../../client/src/components/PlaceCard';

describe('PlaceCarousel', () => {
  it('should exist', () => {
    const wrapper = shallow(<PlaceCarousel />);
    expect(wrapper.find('.place-carousel-comp').exists()).toBe(true);
  });
  it('should render 4 child image cards at a time', () => {
    const wrapper = mount(<PlaceCarousel />);
    expect(wrapper.find(PlaceCard)).toHaveLength(4);
  });
});
