import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../../client/src/components/App';
import PlaceHeader from '../../client/src/components/PlaceHeader';
import PlaceCarousel from '../../client/src/components/PlaceCarousel';
import ActivityHeader from '../../client/src/components/ActivityHeader';
import ActivityCarousel from '../../client/src/components/ActivityCarousel';
// need babel for ^ because webpack only bundles for the index.html and these import jsx w/o babel

describe('App', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<App />); });

  it('should exist', () => {
    expect(wrapper.find('.app-comp').exists()).toBeTruthy();
  });
  it('should render PlaceHeader child components', () => {
    expect(wrapper.containsMatchingElement(<PlaceHeader />)).toBeTruthy();
  });
  it('should render PlaceCarousel child components', () => {
    expect(wrapper.containsMatchingElement(<PlaceCarousel />)).toBeTruthy();
  });
  it('should render ActivityHeader child components', () => {
    expect(wrapper.containsMatchingElement(<ActivityHeader />)).toBeTruthy();
  });
  it('should render ActivityCarousel child components', () => {
    expect(wrapper.containsMatchingElement(<ActivityCarousel />)).toBeTruthy();
  });
});
