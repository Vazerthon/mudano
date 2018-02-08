import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

import UserTimeline, { userPropType } from './UserTimeline';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

const DateTimeline = styled.div`
  display: flex;
  margin-bottom: 88px;
`;

const DateLabel = styled.div`
  transform: rotate(-60deg);
  width: 200px;
  margin-right: -180px;
`;

function Timeline({ users, timeline }) {
  return (
    <Container>
      <DateTimeline>
        {timeline.map(d => (
          <DateLabel key={d.date}>
            {format(d.date, 'dddd Do MMM YYYY')}
          </DateLabel>
        ))}
      </DateTimeline>
      {users.map(u => <UserTimeline key={u.userId} user={u} />)}
    </Container>
  );
}

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
