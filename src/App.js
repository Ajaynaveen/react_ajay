// App.js
import React from 'react';
import Dashboard from './components/Dashboard';
import ListUsers from './components/ListUsers';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import UserProfile from './components/UserProfile';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<ListUsers />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
          <Route path="/profile/:id" element={<UserProfile />} />
          {/* <Route path="/edit-profile/:id" element={<EditProfile />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
