import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  height: 20px;
  width: 200px;
  margin-bottom: 1px;
`;

function Username({ children }) {
  return <Container>{children}</Container>;
}

Username.propTypes = {
  children: PropTypes.node,
};

Username.defaultProps = {
  children: null,
};

export default Username;
