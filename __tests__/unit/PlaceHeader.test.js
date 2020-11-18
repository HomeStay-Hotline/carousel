import React from 'react';
import { shallow, mount } from 'enzyme';
import PlaceHeader from '../../client/src/components/PlaceHeader';

describe('PlaceHeader', () => {
  const handleArrowClick = jest.fn();
  let wrapper;
  beforeEach(() => {
    const props = {
      handleArrowClick,
    };
    wrapper = shallow(<PlaceHeader {...props}/>);
  });
  it('should exist', () => {
    expect(wrapper.find('.place-header-comp').exists()).toBe(true);
  });
  it('should contain the right text', () => {
    expect(wrapper.text().includes('More places to stay')).toBe(true);
  });
  it('should contain two buttons', () => {
    expect(wrapper.find('button')).toHaveLength(2);
  });
  it('should call click handler method when buttons are clicked', () => {
    const button = wrapper.find('button').at(0);
    button.simulate('click');
    expect(handleArrowClick).toBeCalled();
  });
});
