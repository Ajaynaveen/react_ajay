// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        <li>
          <Link to="/users">View All Users</Link>
        </li>
        <li>
          <Link to="/create-user">Create User</Link>
        </li>
        {/* Add links for Edit and Delete here */}
      </ul>
    </div>
  );
}

export default Dashboard;
