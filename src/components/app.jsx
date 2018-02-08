import React from 'react';
import styled from 'styled-components';

import Timeline, { usersPropType, timelinePropType } from './Timeline';

const Container = styled.div`
  height: 100vh;
  display: flex;
  padding: ${({ theme }) => theme.layout.padding};
  background-color: ${({ theme }) => theme.colour.secondary};
  color: ${({ theme }) => theme.colour.primary};
`;

function App({ users, timeline }) {
  return (
    <Container>
      <Timeline users={users} timeline={timeline} />
    </Container>
  );
}

App.propTypes = {
  users: usersPropType,
  timeline: timelinePropType,
};

App.defaultProps = {
  users: [],
  timeline: [],
};

export default App;
