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
`;

const SplitBox = styled.div`
  border-width: 10px;
  border-style: solid;
  border-color: ${({ theme, am, pm }) =>
    `${theme.colour.timeline[pm]} ${theme.colour.timeline[pm]} ${
      theme.colour.timeline[am]
    } ${theme.colour.timeline[am]}`};
`;

function DayCell({ entries }) {
  const am = entries.find(e => e.unit === 'AM');
  const pm = entries.find(e => e.unit === 'PM');

  return (
    <Container>
      <SplitBox am={am ? am.value : 'present'} pm={pm ? pm.value : 'present'} />
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
};

DayCell.defaultProps = {
  entries: [],
};

export default DayCell;
