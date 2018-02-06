import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div``;

function UserTimeline({ user }) {
  return <Container>{user.name}</Container>;
}

export const userPropType = PropTypes.shape({
  userId: PropTypes.string,
  name: PropTypes.string,
});

UserTimeline.propTypes = {
  user: userPropType.isRequired,
};

export default UserTimeline;
