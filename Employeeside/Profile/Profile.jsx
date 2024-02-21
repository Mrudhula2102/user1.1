// EmployeeProfile.jsx

import React, { useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [employeeData, setEmployeeData] = useState({
    name: '',
    email: '',
    position: '',
    photo: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    setEmployeeData({ ...employeeData, photo: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const formData = new FormData();
      formData.append('name', employeeData.name);
      formData.append('email', employeeData.email);
      formData.append('position', employeeData.position);
      formData.append('photo', employeeData.photo);

      // Send form data to backend
      const response = await axios.post('/api/employees', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Response:', response.data);
      alert('Employee profile created successfully!');
    } catch (error) {
      console.error('Error creating employee profile:', error);
      alert('Failed to create employee profile. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Employee Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={employeeData.name} onChange={handleInputChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={employeeData.email} onChange={handleInputChange} />
        </div>
        <div>
          <label>Position:</label>
          <input type="text" name="position" value={employeeData.position} onChange={handleInputChange} />
        </div>
        <div>
          <label>Photo:</label>
          <input type="file" accept="image/*" onChange={handlePhotoChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Profile;
