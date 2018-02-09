import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { userPropType } from './Timeline';
import ConnectedTimeline from '../containers/timeline';

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
  margin: 5px;
`;

const Sub = styled.span`
  color: ${({ theme }) => theme.colour.primary};
  font-size: 0.6em;
`;

const BelowTimeline = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SaveButton = styled.button`
  outline: none;
  border: none;
  font-size: 2em;
  text-transform: uppercase;
  width: 200px;
  height: 40px;
  background-color: ${({ theme }) => theme.colour.primary};
  color: ${({ theme }) => theme.colour.highlight};
  align-self: flex-end;
`;

function App({ user, stageNewEntry, stagedEntry, submitEntry, saveEntries }) {
  return (
    <Container>
      <Header>
        Mudano / <Sub>Absentee Manager</Sub>
      </Header>

      <ConnectedTimeline />
      <BelowTimeline>
        <EntryMaker
          stageNewEntry={stageNewEntry}
          entry={stagedEntry}
          submitEntry={submitEntry}
          userId={user.userId}
        />
        <SaveButton onClick={saveEntries}>Save </SaveButton>
      </BelowTimeline>
    </Container>
  );
}

App.propTypes = {
  user: userPropType,
  stageNewEntry: PropTypes.func.isRequired,
  stagedEntry: entryPropType,
  submitEntry: PropTypes.func.isRequired,
  saveEntries: PropTypes.func.isRequired,
};

App.defaultProps = {
  user: {},
  stagedEntry: {},
};

export default App;
