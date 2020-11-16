import React from 'react';
import { shallow, mount } from 'enzyme';
import PlaceCard from '../../client/src/components/ActivityCard';

describe('PlaceCard', () => {
  const handleHeartClick = jest.fn();
  let wrapper;
  beforeEach(() => {
    const props = {
      handleHeartClick,
    };
    wrapper = shallow(<PlaceCard {...props}/>);
  });

  it('should exist', () => {
    expect(wrapper.find('.activity-card-comp').toExist()).toBe(true);
  });
  it('should contain 3 lines of information', () => {
    expect(wrapper.find('p')).toHaveLength(3);
  });
  it('should contain one image', () => {
    expect(wrapper.find('img')).toHaveLength(1);
  });
  it('should call the change-heart icon color function on click', () => {
    const heartIcon = wrapper.find('div .heart-icon');
    heartIcon.simulate('click');
    expect(handleHeartClick).toBeCalled();
  });
});
