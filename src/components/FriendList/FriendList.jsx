import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(item => {
        return (
          <li className={css.item} key={item.id}>
            <span className={css.status} data-isonline={item.isOnline}></span>
            <img className={css.avatar} src={item.avatar} alt={`User avatar - ${item.name}`} width="48" />
            <p className={css.name}>{item.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
