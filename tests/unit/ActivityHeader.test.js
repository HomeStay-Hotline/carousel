import React from 'react';
import { shallow, mount } from 'enzyme';
import ActivityHeader from '../../client/src/components/ActivityHeader';

describe('PlaceHeader', () => {
  const handleArrowClick = jest.fn();
  let wrapper;
  beforeEach(() => {
    const props = {
      handleArrowClick,
    };
    wrapper = shallow(<ActivityHeader {...props}/>);
  });
  it('should contain the right text', () => {
    expect(wrapper.text().includes('Things to do nearby')).toBe(true);
  });
  it('should contain two buttons', () => {
    expect(wrapper.find('button')).toHaveLength(2);
  });
  it('should call click handler method when buttons are clicked', () => {
    const button = wrapper.find('button').at(0); // grab the first matching node since there's two
    button.simulate('click');
    expect(handleArrowClick).toBeCalled();
  });
});
