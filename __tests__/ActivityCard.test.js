import React from 'react';
import { shallow, mount } from 'enzyme';
import ActivityCard from '../client/src/components/ActivityCard';
import testData from './__mocks__/dataMock';

describe('PlaceCard', () => {
  it('should exist', () => {
    const wrapper = shallow(<ActivityCard activity={testData.activityEx} />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should display modal on icon click', () => {
    const wrapper = mount(<ActivityCard activity={testData.activityEx} />);
    const heartIconContainer = wrapper.find('.a-heart-container');
    heartIconContainer.simulate('click');
    expect(wrapper.find('.modal-container').exists()).toBe(true);
  });
  it('should call the change heart icon color function on YES modal button click', () => {
    const wrapper = mount(<ActivityCard activity={testData.activityEx} />);
    const heartIconContainer = wrapper.find('.a-heart-container');
    heartIconContainer.simulate('click'); // launch modal
    const yesButton = wrapper.find('.modal-button').at(0); // find modal buttton
    yesButton.simulate('click'); // click button
    const heartIcon = wrapper.find('.activity-heart-icon'); // find icon
    expect(heartIcon.prop('style')).toHaveProperty('background', 'red'); // check its red
  });
  it('should not call the change heart icon color function on NO modal button click', () => {
    const wrapper = mount(<ActivityCard activity={testData.activityEx} />);
    const heartIconContainer = wrapper.find('.a-heart-container');
    heartIconContainer.simulate('click');
    const yesButton = wrapper.find('.modal-button').at(1);
    yesButton.simulate('click');
    const heartIcon = wrapper.find('.activity-heart-icon');
    expect(heartIcon.prop('style')).toHaveProperty('background', 'black');
  });
  it('should render data from passed props accordingly', () => {
    const wrapper = shallow(<ActivityCard activity={testData.activityEx} />);
    expect(wrapper.text()).toMatch(/mock activity/);
    expect(wrapper.text()).toMatch(/4.5/);
    expect(wrapper.text()).toMatch(/50/);
    expect(wrapper.text()).toMatch(/6/);
    expect(wrapper.find('.activity-img').prop('src')).toMatch(/^https/);
  });
});
