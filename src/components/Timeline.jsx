import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import UserTimeline, { userPropType } from './UserTimeline';

const Container = styled.div``;

function Timeline({ users }) {
  return (
    <Container>
      {users.map(u => <UserTimeline key={u.userId} user={u} />)}
    </Container>
  );
}

export const usersPropType = PropTypes.arrayOf(userPropType);

Timeline.propTypes = {
  users: usersPropType,
};

Timeline.defaultProps = {
  users: [],
};

export default Timeline;
