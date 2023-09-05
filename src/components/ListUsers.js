// ListUsers.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from your local JSON server
    axios.get('http://localhost:3002/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div>
      <h2>List Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <a href={`/profile/${user.id}`}>{user.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListUsers;
