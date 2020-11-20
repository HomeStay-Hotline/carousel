import React from 'react';
import { shallow } from 'enzyme';
import PlaceCard from '../client/src/components/PlaceCard';
import testData from './__mocks__/dataMock';

describe('PlaceCard', () => {
  it('should exist', () => {
    const wrapper = shallow(<PlaceCard place={testData.placeEx} />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should call the change heart icon color function on click', () => {
    const wrapper = shallow(<PlaceCard place={testData.placeEx} />);
    const heartIconContainer = wrapper.find('.a-heart-container');
    heartIconContainer.simulate('click');
    // order matters (state)
    const heartIcon = wrapper.find('.place-heart-icon');
    expect(heartIcon.prop('style')).toHaveProperty('background', 'red');
  });
  it('should correctly assign superhost status', () => {
    const wrapper = shallow(<PlaceCard place={testData.placeExOdd} />);
    expect(wrapper.find('.superhost-icon').exists()).toBe(false);
  });
  it('should render data from passed props accordingly', () => {
    const wrapper = shallow(<PlaceCard place={testData.placeEx} />);
    expect(wrapper.text()).toMatch(/mock listing/);
    expect(wrapper.text()).toMatch(/4.5/);
    expect(wrapper.text()).toMatch(/50/);
    expect(wrapper.text()).toMatch(/6/);
    expect(wrapper.find('.place-img').prop('src')).toMatch(/^https/);
  });
});
