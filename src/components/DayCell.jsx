import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colour.highlight};
  height: 20px;
  width: 20px;
  display: flex;
  align-content: center;
  justify-content: center;
  margin-bottom: 1px;
`;

const SplitBox = styled.div`
  border-width: 10px;
  border-style: solid;
  border-color: ${({ theme, am, pm }) =>
    `${theme.colour.timeline[pm]} ${theme.colour.timeline[pm]} ${
      theme.colour.timeline[am]
    } ${theme.colour.timeline[am]}`};
`;

function DayCell({ entries, isPublicHoliday }) {
  const am = entries.find(e => e.unit === 'AM');
  const pm = entries.find(e => e.unit === 'PM');

  const defaultColourKey = isPublicHoliday ? 'P' : 'present';

  return (
    <Container>
      <SplitBox
        am={am ? am.value : defaultColourKey}
        pm={pm ? pm.value : defaultColourKey}
      />
    </Container>
  );
}

export const entryPropType = PropTypes.shape({
  date: PropTypes.date,
  unit: PropTypes.string,
  value: PropTypes.string,
});

DayCell.propTypes = {
  entries: PropTypes.arrayOf(entryPropType),
  isPublicHoliday: PropTypes.bool,
};

DayCell.defaultProps = {
  entries: [],
  isPublicHoliday: false,
};

export default DayCell;
