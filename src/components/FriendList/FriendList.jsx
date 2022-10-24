import PropTypes from 'prop-types';

import { Status, Friend, Avatar, Name, List } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(item => {
        return (
          <Friend key={item.id}>
            <Status isonline={item.isOnline}></Status>
            <Avatar
              src={item.avatar}
              alt={`User avatar - ${item.name}`}
              width="48"
            />
            <Name>{item.name}</Name>
          </Friend>
        );
      })}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
