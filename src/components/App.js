import React from "react";
import Profile from "./Profile/Profile";
import user from "../user.json";

// console.log(user);

export default function App() {
  return <Profile person={user} />;
}
