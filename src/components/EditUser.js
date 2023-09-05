// EditUser.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';


function EditUser() {
  const { id } = useParams(); // Get the user ID from the URL params
  const [user, setUser] = useState({ name: '', email: '' });
  const navigate = useNavigate()

  useEffect(() => {
    // Fetch the user data based on the ID
    axios.get(`http://localhost:3002/users/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [id]); // Trigger the effect whenever the ID changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleDeleteClick = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');

    if (confirmDelete) {
      // Send a DELETE request to remove the user
      axios.delete(`http://localhost:3002/users/${id}`)
        .then(() => {
          console.log('User deleted successfully');
          // Redirect to the Dashboard after successful deletion
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
      // Send a PUT request to update the user
      const response = await axios.put(`http://localhost:3002/users/${id}`, user);
  
      console.log('User updated:', response.data);
      // Optionally, you can redirect or show a success message here
  
      // Navigate back to the Dashboard after successful update
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <div>
      <h2>Edit User</h2>
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
        <button type="submit">Update User</button>
        {/* Add a button for deleting the user */}
        <button type="button" onClick={handleDeleteClick}>Delete User</button>
        {/* Add a link back to the Dashboard */}
        <Link to="/">Back to Dashboard</Link>
      </form>
    </div>
  );
}

export default EditUser;
