// import React from 'react';
import * as React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../client/src/components/App';
import PlaceHeader from '../client/src/components/PlaceHeader';
import PlaceCarousel from '../client/src/components/PlaceCarousel';
import ActivityHeader from '../client/src/components/ActivityHeader';
import ActivityCarousel from '../client/src/components/ActivityCarousel';

describe('App', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<App />); });
  it('should exist', () => {
    expect(wrapper.exists()).toBeTruthy();
  });
  describe('child components', () => {
    it('should render PlaceHeader child components', () => {
      expect(wrapper.containsMatchingElement(<PlaceHeader passedRef={{}} />)).toBeTruthy();
    });
    it('should render PlaceCarousel child components', () => {
      expect(wrapper.find(PlaceCarousel)).toHaveLength(1);
    });
    it('should render ActivityHeader child components', () => {
      expect(wrapper.containsMatchingElement(<ActivityHeader passedRef={{}} />)).toBeTruthy();
    });
    it('should render ActivityCarousel child components', () => {
      wrapper.setProps({});
      expect(wrapper.find(ActivityCarousel)).toHaveLength(1);
    });
  });
});
