import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DayPickerSingleDateController } from 'react-dates';

import { entryPropType } from './DayCell';

const Container = styled.div`
  display: flex;
`;

const StyledButton = styled.button`
  outline: none;
  border: none;
  width: ${({ double }) => (double ? '200px' : '100px')};
  margin: 2px;
  height: 20px;
  background-color: ${({ theme }) => theme.colour.primary};
  color: ${({ theme, on }) =>
    on ? theme.colour.highlight : theme.colour.secondary};

  border-bottom: ${({ theme, hint }) =>
    hint ? `4px solid ${theme.colour.timeline[hint]}` : 'none'};
`;

const UnitContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ValueContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Selectors = styled.div`
  display: flex;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Warnings = styled.span`
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.colour.highlight};
`;

const allowSubmit = entry => entry.date && entry.unit && entry.value;

function EntryMaker({ stageNewEntry, entry, submitEntry, userId }) {
  const patch = diff => ({ ...entry, ...diff });

  return (
    <Container>
      <DayPickerSingleDateController
        numberOfMonths={3}
        onDateChange={date => stageNewEntry(patch({ date }))}
        date={entry.date}
      />

      <Buttons>
        <Selectors>
          <UnitContainer>
            <StyledButton
              on={entry.unit === 'AM'}
              onClick={() => stageNewEntry(patch({ unit: 'AM' }))}
            >
              AM
            </StyledButton>

            <StyledButton
              on={entry.unit === 'PM'}
              onClick={() => stageNewEntry(patch({ unit: 'PM' }))}
            >
              PM
            </StyledButton>
          </UnitContainer>

          <ValueContainer>
            <StyledButton
              on={entry.value === 'P'}
              hint="P"
              onClick={() => stageNewEntry(patch({ value: 'P' }))}
            >
              Public Holiday
            </StyledButton>

            <StyledButton
              on={entry.value === 'V'}
              hint="V"
              onClick={() => stageNewEntry(patch({ value: 'V' }))}
            >
              Vacation
            </StyledButton>

            <StyledButton
              on={entry.value === 'T'}
              hint="T"
              onClick={() => stageNewEntry(patch({ value: 'T' }))}
            >
              Training
            </StyledButton>

            <StyledButton
              on={entry.value === 'present'}
              hint="present"
              onClick={() => stageNewEntry(patch({ value: 'present' }))}
            >
              Present
            </StyledButton>
          </ValueContainer>
        </Selectors>
        <Warnings>
          {entry.warnings.map(w => <p key={w.id}>{w.msg}</p>)}
        </Warnings>
        <StyledButton
          on={allowSubmit(entry)}
          disabled={!allowSubmit(entry)}
          double
          onClick={() => submitEntry(userId, entry)}
        >
          Sumbit
        </StyledButton>
      </Buttons>
    </Container>
  );
}

EntryMaker.propTypes = {
  stageNewEntry: PropTypes.func.isRequired,
  entry: entryPropType,
  submitEntry: PropTypes.func.isRequired,
  userId: PropTypes.string,
};

EntryMaker.defaultProps = {
  entry: {},
  userId: '',
};

export default EntryMaker;
