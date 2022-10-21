import PropTypes from 'prop-types'
import { List, ItemStats, Label, Quantity } from "./UserStats.styled";

export const UserStats = ({followers, views, likes}) => {
    return (<List>
    <ItemStats>
      <Label >Followers</Label>
      <Quantity >{followers}</Quantity>
    </ItemStats>
    <ItemStats>
      <Label >Views</Label>
      <Quantity >{views}</Quantity>
    </ItemStats>
    <ItemStats>
      <Label >Likes</Label>
      <Quantity >{likes}</Quantity>
    </ItemStats>
  </List>)
}

UserStats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired
}