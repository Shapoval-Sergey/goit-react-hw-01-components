import React from "react";
// import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

function FriendList({ friends, children }) {
  return (
    <ul className={styles.friendList}>
      {children} {friends.map((friend) => friend)}
    </ul>
  );
}

function FriendListItem(friend) {
  const { avatar, name, isOnline, id } = friend;
  return (
    <li key={id}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.defaultProps = {
  avatar:
    "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
};

// FriendList.propTypes = {
//   friend: PropTypes.objectOf(
//     PropTypes.exact({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//       avatar: PropTypes.string,
//     })
//   ),
// };

export { FriendList, FriendListItem };
