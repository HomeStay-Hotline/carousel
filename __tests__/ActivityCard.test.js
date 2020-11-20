import React from 'react';
import { shallow, mount } from 'enzyme';
import ActivityCard from '../client/src/components/ActivityCard';
import testData from './__mocks__/dataMock';

describe('PlaceCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ActivityCard activity={testData.activityEx} />);
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
  it('should render data from passed props accordingly', () => {
    expect(wrapper.text()).toMatch(/mock activity/);
    expect(wrapper.text()).toMatch(/4.5/);
    expect(wrapper.text()).toMatch(/50/);
    expect(wrapper.text()).toMatch(/6/);
    expect(wrapper.find('.activity-img').prop('src')).toMatch(/^https/);
  });
});
