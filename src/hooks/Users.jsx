import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { link } from "fs";

export default function Users(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUsers() {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setUsers(result.data);
    }
    getUsers();
  });
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
