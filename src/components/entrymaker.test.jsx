/* eslint-env jest */

import React from 'react';
import shallowThemeWrapper from './test-helper';
import theme from '../theme';

import EntryMaker from './EntryMaker';

const shallow = component => shallowThemeWrapper(component, theme);

describe('EntryMaker component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<EntryMaker stageNewEntry={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
