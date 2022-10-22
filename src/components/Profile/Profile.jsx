import PropTypes from 'prop-types'
import { Container, Description, UserName, Avatar, Tag, Location } from './Profile.styled'
import { UserStats } from './UserStats/UserStats';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Container>
      <Description >
        <Avatar src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
          </Description>
          <UserStats
            followers={stats.followers}
            views={stats.views}
            likes={stats.likes}
          />
    </Container>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
}