import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  height: 20px;
  width: 200px;
  margin-bottom: 1px;
  color: ${({ theme, highlight }) =>
    highlight ? theme.colour.highlight : theme.colour.primary};
`;

function Username({ children, highlight }) {
  return <Container highlight={highlight}>{children}</Container>;
}

Username.propTypes = {
  children: PropTypes.node,
  highlight: PropTypes.bool,
};

Username.defaultProps = {
  children: null,
  highlight: false,
};

export default Username;
