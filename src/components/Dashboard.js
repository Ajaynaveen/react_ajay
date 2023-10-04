import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
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
      <h2 style={headerStyle}>Dashboard</h2>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <Link to="/users" style={linkStyle}>
            View All Users
          </Link>
        </li>
        <li style={listItemStyle}>
          <Link to="/create-user" style={linkStyle}>
            Create User
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;
