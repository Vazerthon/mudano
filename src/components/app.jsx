import React from 'react';
import styled from 'styled-components';

import Timeline, { usersPropType } from './Timeline';

const Container = styled.div`
  height: 100vh;
  display: flex;
  padding: ${({ theme }) => theme.layout.padding};
  background-color: ${({ theme }) => theme.colour.secondary};
  color: ${({ theme }) => theme.colour.primary};
`;

function App({ users }) {
  return (
    <Container>
      <Timeline users={users} />
    </Container>
  );
}

App.propTypes = {
  users: usersPropType,
};

App.defaultProps = {
  users: [],
};

export default App;
