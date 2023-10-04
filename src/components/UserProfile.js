import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3002/users/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [id]);

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

  const contentStyle = {
    textAlign: 'center',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
    marginRight: '10px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>User Profile</h2>
      {user ? (
        <div style={contentStyle}>
          <h3>Name: {user.name}</h3>
          <p>Email: {user.email}</p>
          <Link to={`/edit-user/${id}`} style={linkStyle}>
            Edit
          </Link>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
      <Link to="/" style={linkStyle}>
        Back to Dashboard
      </Link>
    </div>
  );
}

export default UserProfile;
