import React from "react";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import stats from "../statistical-data.json";
import user from "../user.json";
import friends from "../friends.json";
import transactions from "../transactions.json";

function App() {
  return (
    <>
      <Profile person={user} />
      <Statistics stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
