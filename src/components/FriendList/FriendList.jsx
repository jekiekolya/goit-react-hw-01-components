import PropTypes from 'prop-types'
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(item => {
        return (
          <li className={css.list_item} key={item.id}>
            <span className={css.status} data-isonline={item.isOnline}></span>
            <img className={css.avatar} src={item.avatar} alt={`User avatar - ${item.name}`} width="48" />
            <p className={css.name}>{item.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired
}