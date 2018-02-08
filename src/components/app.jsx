import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Timeline, {
  usersPropType,
  userPropType,
  timelinePropType,
} from './Timeline';

import EntryMaker from './EntryMaker';

import { entryPropType } from './DayCell';

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

function App({ users, user, timeline, stageNewEntry, stagedEntry }) {
  return (
    <Container>
      <Header>
        Mudano / <Sub>Absentee Manager</Sub>
      </Header>

      <Timeline users={users} user={user} timeline={timeline} />
      <EntryMaker stageNewEntry={stageNewEntry} entry={stagedEntry} />
    </Container>
  );
}

App.propTypes = {
  users: usersPropType,
  user: userPropType,
  timeline: timelinePropType,
  stageNewEntry: PropTypes.func.isRequired,
  stagedEntry: entryPropType,
};

App.defaultProps = {
  users: [],
  user: {},
  timeline: [],
  stagedEntry: {},
};

export default App;
