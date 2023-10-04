import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

function EditUser() {
  const { id } = useParams();
  const [user, setUser] = useState({ name: '', email: '' });
  const navigate = useNavigate();

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleDeleteClick = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');

    if (confirmDelete) {
      axios
        .delete(`http://localhost:3002/users/${id}`)
        .then(() => {
          console.log('User deleted successfully');
          navigate('/');
        })
        .catch((error) => {
          console.error('Error deleting user:', error);
        });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:3002/users/${id}`, user);

      console.log('User updated:', response.data);
    } catch (error) {
      console.error('Error updating user:', error);
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
    marginRight: '10px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Edit User</h2>
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
          Update User
        </button>
        <button type="button" onClick={handleDeleteClick} style={buttonStyle}>
          Delete User
        </button>
        <Link to="/" style={{ marginTop: '10px', color: '#007bff' }}>
          Back to Dashboard
        </Link>
      </form>
    </div>
  );
}

export default EditUser;
