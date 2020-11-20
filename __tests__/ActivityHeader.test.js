import React from 'react';
import { shallow, mount } from 'enzyme';
import ActivityHeader from '../client/src/components/ActivityHeader';
import App from '../client/src/components/App';

describe('ActivityHeader', () => {
  Element.prototype.scrollBy = jest.fn(); // JSDOM does not have scrollBy built in

  it('should exist', () => {
    const wrapper = shallow(<ActivityHeader passedRef={{}} />);
    expect(wrapper.exists()).toBe(true);
  });
  describe('carousel movement', () => {
    it('should call carousel movement function anytime the arrow buttons are clicked', () => {
      const wrapper = mount(<App />); // creating App wrapper to connect react refs
      const rightButton = wrapper.find('.left-button.activity');
      const leftButton = wrapper.find('.right-button.activity');
      wrapper.setProps({}); // needed for the ref update
      rightButton.simulate('click');
      leftButton.simulate('click');
      expect(Element.prototype.scrollBy).toHaveBeenCalledTimes(2);
      jest.clearAllMocks();
    });
  });
  describe('arrow buttons', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<App />);
    });
    describe('right arrow', () => {
      it('should update count by one when right button is clicked once', () => {
        const button = wrapper.find('.right-button.activity');
        wrapper.setProps({}); // set ref again
        button.simulate('click');
        const pageCount = wrapper.find('.page-count').at(1).text().slice(0, 1);
        expect(pageCount).toBe('2');
        button.simulate('click');
        const pageCount2 = wrapper.find('.page-count').at(1).text().slice(0, 1);
        expect(pageCount2).toBe('3');
        jest.clearAllMocks();
      });
      it('should reset count after two right clicks', () => {
        const button = wrapper.find('.right-button.activity');
        wrapper.setProps({});
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');
        const pageCount = wrapper.find('.page-count').at(1).text().slice(0, 1);
        expect(pageCount).toBe('1');
        jest.clearAllMocks();
      });
    });
    describe('left arrow', () => {
      it('should reset count to page on inital click', () => {
        const button = wrapper.find('.left-button.activity');
        wrapper.setProps({});
        button.simulate('click');
        const pageCount = wrapper.find('.page-count').at(1).text().slice(0, 1);
        expect(pageCount).toBe('3');
        jest.clearAllMocks();
      });
      it('should subtract page count by one after initial click', () => {
        const button = wrapper.find('.left-button.activity');
        wrapper.setProps({});
        button.simulate('click');
        button.simulate('click');
        const pageCount = wrapper.find('.page-count').at(1).text().slice(0, 1);
        expect(pageCount).toBe('2');
        button.simulate('click');
        const pageCount2 = wrapper.find('.page-count').at(1).text().slice(0, 1);
        expect(pageCount2).toBe('1');
        jest.clearAllMocks();
      });
    });
  });
});
