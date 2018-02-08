import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { format, isEqual } from 'date-fns';

import Username from './Username';
import DayCell, { entryPropType } from './DayCell';

const Container = styled.div`
  display: flex;
  height: 63vh;
  align-items: flex-end;
`;

const Scroller = styled.div`
  overflow-x: auto;
  display: flex;
  align-items: flex-end;
  height: 100%;
`;

const DateTimeline = styled.div`
  display: flex;
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
  margin-bottom: 16px;
`;

const HighlightOverlay = styled.div`
  position: fixed;
  background-color: green;
  height: ${({ height }) => `${height}px`};
  width: 20px;
  margin-top: 18px;

  opacity: 0;

  :hover {
    opacity: 0.4;
  }
`;

const matchingEntries = (entries, date) =>
  entries.filter(e => isEqual(e.date, date));

const prettyDate = date => format(date, 'Do MMM YY');

function Timeline({ users, user, timeline }) {
  return (
    <Container>
      <Usernames>
        {users.map(u => (
          <Username key={u.userId} highlight={u.userId === user.userId}>
            {u.name}
          </Username>
        ))}
      </Usernames>
      <Scroller>
        <DateTimeline>
          {timeline.map(d => (
            <DateColumn key={d.date}>
              <HighlightOverlay height={(users.length + 1) * 20} />
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
      </Scroller>
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
  user: userPropType,
  timeline: timelinePropType,
};

Timeline.defaultProps = {
  users: [],
  user: {},
  timeline: [],
};

export default Timeline;
