// CreateUser.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CreateUser() {
  const [user, setUser] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to create a new user
      const response = await axios.post('http://localhost:3002/users', user);

      console.log('User created:', response.data);
     

      // Clear the form after successful submission
      setUser({ name: '', email: '' });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create User</button>
        <Link to="/">Back to Dashboard</Link>
      </form>
    </div>
  );
}

export default CreateUser;
