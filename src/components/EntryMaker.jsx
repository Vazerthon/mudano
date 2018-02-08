import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DayPickerSingleDateController } from 'react-dates';

import { entryPropType } from './DayCell';

const Container = styled.div``;

function EntryMaker({ stageNewEntry, entry }) {
  const patch = diff => ({ ...entry, ...diff });

  return (
    <Container>
      <DayPickerSingleDateController
        numberOfMonths={3}
        onDateChange={date => stageNewEntry(patch({ date }))}
        date={entry.date}
      />
    </Container>
  );
}

EntryMaker.propTypes = {
  stageNewEntry: PropTypes.func.isRequired,
  entry: entryPropType,
};

EntryMaker.defaultProps = {
  entry: {},
};

export default EntryMaker;
