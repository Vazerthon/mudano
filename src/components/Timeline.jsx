import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { format, isEqual } from 'date-fns';

import Username from './Username';
import DayCell, { entryPropType } from './DayCell';

const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
`;

const DateTimeline = styled.div`
  display: flex;
  margin-top: -20px;
`;

const DateColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const DateLabel = styled.span`
  transform: rotate(-60deg) translateX(50px) translateY(-77px);
  width: 200px;
  margin-right: -180px;
`;

const Usernames = styled.div`
  display: flex;
  flex-direction: column;
`;

const matchingEntries = (entries, date) =>
  entries.filter(e => isEqual(e.date, date));

const prettyDate = date => format(date, 'dddd Do MMM YYYY');

function Timeline({ users, timeline }) {
  return (
    <Container>
      <Usernames>
        {/* TODO - hightlight own user */}
        {users.map(u => <Username key={u.userId}>{u.name}</Username>)}
      </Usernames>
      <DateTimeline>
        {timeline.map(d => (
          <DateColumn key={d.date}>
            <DateLabel>{prettyDate(d.date)}</DateLabel>
            {users.map(u => (
              <DayCell
                key={`${u.userId}-${prettyDate(d.date)}`}
                entries={matchingEntries(u.entries, d.date)}
                isPublicHoliday={d.isPublicHoliday}
              />
            ))}
          </DateColumn>
        ))}
      </DateTimeline>
    </Container>
  );
}

export const userPropType = PropTypes.shape({
  userId: PropTypes.string,
  name: PropTypes.string,
  entries: PropTypes.arrayOf(entryPropType),
});

export const usersPropType = PropTypes.arrayOf(userPropType);
export const timelinePropType = PropTypes.arrayOf(
  PropTypes.shape({ date: PropTypes.date, isPublicHoliday: PropTypes.bool }),
);

Timeline.propTypes = {
  users: usersPropType,
  timeline: timelinePropType,
};

Timeline.defaultProps = {
  users: [],
  timeline: [],
};

export default Timeline;
