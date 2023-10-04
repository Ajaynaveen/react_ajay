// UserProfile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'; // 

function UserProfile() {
  const { id } = useParams(); 
  const [user, setUser] = useState(null);

  useEffect(() => {
 
    axios.get(`http://localhost:3002/users/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [id]); 

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <h3>Name: {user.name}</h3>
          <p>Email: {user.email}</p>
          <Link to={`/edit-user/${id}`}>Edit</Link>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    
      <Link to="/">Back to Dashboard</Link>
    </div>
  );
}

export default UserProfile;
