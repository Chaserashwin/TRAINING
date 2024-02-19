import React, { useState } from "react";

import Search from "./Search";

const allUsers = ["john", "alex", "george", "sinon", "james"];

export default function index() {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = (text: string) => {
    const filteredUsers = allUsers.filter((user) => user.includes(text));
    const filteredUsers = allUsers.filter((user) => user.includes(text));
    setUsers(filteredUsers);
  };
  return ();
}
