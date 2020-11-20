import React from 'react';
import { shallow } from 'enzyme';
import ActivityCard from '../client/src/components/ActivityCard';
import testData from './__mocks__/dataMock';

describe('PlaceCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ActivityCard activity={testData.activityEx} />);
  });

  it('should exist', () => {
    expect(wrapper.exists()).toBe(true);
  });
  it('should call the change heart icon color function on click', () => {
    const heartIconContainer = wrapper.find('.a-heart-container');
    heartIconContainer.simulate('click');
    // watch order (state)
    const heartIcon = wrapper.find('.activity-heart-icon');
    expect(heartIcon.prop('style')).toHaveProperty('background', 'red');
  });
  it('should render data from passed props accordingly', () => {
    expect(wrapper.text()).toMatch(/mock activity/);
    expect(wrapper.text()).toMatch(/4.5/);
    expect(wrapper.text()).toMatch(/50/);
    expect(wrapper.text()).toMatch(/6/);
    expect(wrapper.find('.activity-img').prop('src')).toMatch(/^https/);
  });
});
