import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DayPickerSingleDateController } from 'react-dates';

const Container = styled.div``;

function EntryMaker({ onDateChange }) {
  return (
    <Container>
      <DayPickerSingleDateController
        numberOfMonths={3}
        onDateChange={onDateChange}
      />
    </Container>
  );
}

EntryMaker.propTypes = {
  onDateChange: PropTypes.func.isRequired,
};

EntryMaker.defaultProps = {};

export default EntryMaker;
