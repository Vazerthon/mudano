/* eslint-env jest */

import React from 'react';
import shallowThemeWrapper from './test-helper';
import theme from '../theme';

import Username from './Username';

const shallow = component => shallowThemeWrapper(component, theme);

describe('Username component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Username />);
    expect(wrapper).toMatchSnapshot();
  });
});
