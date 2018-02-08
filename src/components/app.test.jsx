/* eslint-env jest */

import React from 'react';
import shallowThemeWrapper from './test-helper';
import theme from '../theme';

import App from './app';

const shallow = component => shallowThemeWrapper(component, theme);

describe('app component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
