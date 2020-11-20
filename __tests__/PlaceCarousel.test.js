import React from 'react';
import { shallow, mount } from 'enzyme';
import PlaceCarousel from '../client/src/components/PlaceCarousel';
import PlaceCard from '../client/src/components/PlaceCard';
import testData from './__mocks__/dataMock';

describe('PlaceCarousel', () => {
  it('should exist', () => {
    const wrapper = shallow(<PlaceCarousel places={[]} connectedRef={{}} />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should render as many child image cards as there are in the database for one view', () => {
    const wrapper = shallow(<PlaceCarousel places={testData.placesEx} connectedRef={{}} />);
    expect(wrapper.find(PlaceCard)).toHaveLength(testData.placesEx.length);
  });
});
