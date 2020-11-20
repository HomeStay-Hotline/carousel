import React from 'react';
import { shallow, mount } from 'enzyme';
import ActivityCarousel from '../client/src/components/ActivityCarousel';
import ActivityCard from '../client/src/components/ActivityCard';
import testData from './__mocks__/dataMock';

describe('ActivityCarousel', () => {
  it('should exist', () => {
    const wrapper = shallow(<ActivityCarousel activities={[]} connectedRef={{}} />);
    expect(wrapper.exists()).toBe(true);
  });
  it('should render as many child image cards as there are in the database for one view', () => {
    const wrapper = shallow(
      <ActivityCarousel
        activities={testData.activitiesEx}
        connectedRef={{}}
      />,
    );
    expect(wrapper.find(ActivityCard)).toHaveLength(testData.activitiesEx.length);
  });
});
