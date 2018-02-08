/* eslint-env jest */

import React from 'react';
import shallowThemeWrapper from './test-helper';
import theme from '../theme';

import DayCell from './DayCell';

const shallow = component => shallowThemeWrapper(component, theme);

describe('DayCell component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<DayCell />);
    expect(wrapper).toMatchSnapshot();
  });
});
