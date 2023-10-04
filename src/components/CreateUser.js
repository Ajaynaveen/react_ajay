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
      const response = await axios.post('http://localhost:3002/users', user);

      console.log('User created:', response.data);

      setUser({ name: '', email: '' });
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

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

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const inputStyle = {
    marginBottom: '10px',
    padding: '8px',
    width: '100%',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Create User</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            style={inputStyle}
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
            style={inputStyle}
            required
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Create User
        </button>
        <Link to="/" style={{ marginTop: '10px', color: '#007bff' }}>
          Back to Dashboard
        </Link>
      </form>
    </div>
  );
}

export default CreateUser;
