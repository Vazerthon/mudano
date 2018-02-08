/* eslint-env jest */

import React from 'react';
import shallowThemeWrapper from './test-helper';
import theme from '../theme';

import App from './App';

const shallow = component => shallowThemeWrapper(component, theme);

describe('app component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <App stageNewEntry={() => {}} submitEntry={() => {}} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
