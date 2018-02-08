import React from 'react';
import styled from 'styled-components';

import Timeline, { usersPropType, timelinePropType } from './Timeline';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.layout.padding};
  background-color: ${({ theme }) => theme.colour.secondary};
  color: ${({ theme }) => theme.colour.primary};
`;

const Header = styled.h1`
  color: ${({ theme }) => theme.colour.highlight};
`;

const Sub = styled.span`
  color: ${({ theme }) => theme.colour.primary};
  font-size: 0.6em;
`;

function App({ users, timeline }) {
  return (
    <Container>
      <Header>
        Mudano / <Sub>Absentee Manager</Sub>
      </Header>

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
