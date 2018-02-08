/* eslint-env jest */

import React from 'react';
import shallowThemeWrapper from './test-helper';
import theme from '../theme';

import Timeline from './timeline';

const shallow = component => shallowThemeWrapper(component, theme);

describe('timeline component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Timeline />);
    expect(wrapper).toMatchSnapshot();
  });
});
