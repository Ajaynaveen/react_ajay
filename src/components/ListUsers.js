import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ListUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3002/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  // Inline styles for demonstration purposes
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    width: '300px',
    margin: '0 auto',
  };

  const headerStyle = {
    fontSize: '24px',
    marginBottom: '20px',
  };

  const listStyle = {
    listStyle: 'none',
    padding: '0',
    textAlign: 'center',
  };

  const listItemStyle = {
    marginBottom: '10px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>List Users</h2>
      <ul style={listStyle}>
        {users.map((user) => (
          <li key={user.id} style={listItemStyle}>
            <Link to={`/profile/${user.id}`} style={linkStyle}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListUsers;
