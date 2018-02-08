import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colour.highlight};
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function DayCell({ entry }) {
  return <Container>{entry && 'x'}</Container>;
}

export const entryPropType = PropTypes.shape({
  date: PropTypes.date,
  unit: PropTypes.string,
  value: PropTypes.string,
});

DayCell.propTypes = {
  entry: entryPropType,
};

DayCell.defaultProps = {
  entry: null,
};

export default DayCell;
