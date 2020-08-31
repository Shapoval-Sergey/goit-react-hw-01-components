import React from "react";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import stats from "../statistical-data.json";
import user from "../user.json";

console.log(stats);

function App() {
  return (
    <>
      <Profile person={user} />
      <Statistics stats={stats} />
    </>
  );
}

export default App;
