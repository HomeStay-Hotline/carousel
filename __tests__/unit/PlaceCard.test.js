import React from 'react';
import { shallow, mount } from 'enzyme';
import PlaceCard from '../../client/src/components/PlaceCard';

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
    expect(wrapper.find('.place-card-comp').toExist()).toBe(true);
  });
  it('should contain 4 lines of information', () => {
    expect(wrapper.find('p')).toHaveLength(4);
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
