import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { MdMenu } from 'react-icons/lib/md';

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
  height: 8vh;
`;

const Sub = styled.span`
  color: ${({ theme }) => theme.colour.primary};
  font-size: 0.6em;
`;

const TimelineContainer = styled.div``;

const BelowTimeline = styled.div`
  background-color: ${({ theme }) => theme.colour.secondary};
  display: flex;
  justify-content: space-around;
  width: 100vw;
  height: 38vh;
  position: fixed;
  bottom: 10px;
  left: 0;
  border-top: 2px solid ${({ theme }) => theme.colour.primary};
  padding-top: 8px;

  transform: ${({ visible }) => (visible ? 'none' : 'translateY(36vh)')};
  transition: transform 0.4s ease-in-out;
`;

const OpenCloseButton = styled.div`
  position: relative;
  left: 50vw;
  top: -30px;
  border: 3px solid ${({ theme }) => theme.colour.primary};
  background-color: ${({ theme }) => theme.colour.secondary};
  width: 40px;
  height: 40px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  :hover {
    background-color: ${({ theme }) => theme.colour.highlight};
  }
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

function App({
  user,
  stageNewEntry,
  stagedEntry,
  submitEntry,
  saveEntries,
  showEntryMaker,
  toggleEntryMaker,
}) {
  return (
    <Container>
      <Header>
        Mudano / <Sub>Absentee Manager</Sub>
      </Header>

      <TimelineContainer>
        <ConnectedTimeline />
      </TimelineContainer>

      <BelowTimeline visible={showEntryMaker}>
        <OpenCloseButton onClick={toggleEntryMaker}>
          <MdMenu size={30} />
        </OpenCloseButton>
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
  showEntryMaker: PropTypes.bool,
  toggleEntryMaker: PropTypes.func.isRequired,
};

App.defaultProps = {
  user: {},
  stagedEntry: {},
  showEntryMaker: true,
};

export default App;
