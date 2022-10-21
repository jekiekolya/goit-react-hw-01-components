import PropTypes from 'prop-types'
import {Container, Description, UserName, Avatar, Tag, Location} from './Profile.styled'

export const Profile = ({ username, tag, location, avatar, children }) => {
  return (
    <Container>
      <Description >
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
          </Description>
          {children}
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
}