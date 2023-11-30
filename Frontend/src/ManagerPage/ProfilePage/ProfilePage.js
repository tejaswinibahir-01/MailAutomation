import React, { useState, useEffect } from 'react';
import './ProfilePage.css';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    designation: '',
    email: '',
    contact: '',
    password: '',
    profilePicture: ''
  });

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/user?email=${userEmail}`);
        const userData = await response.json();
        setProfile(userData);

        // Store the user's name in local storage
        localStorage.setItem('userName', userData.name);
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    // Replace 'userEmail' with the actual email of the logged-in user
    const userEmail = 'user@example.com';

    // Call the fetchUserData function
    fetchUserData();
  }, []); // The empty dependency array ensures that this effect runs only once when the component mounts

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile({ ...profile, profilePicture: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    setEditMode(false);
    // Add logic to save the updated profile data to the backend
  };

  const handleInputChange = (e, field) => {
    setProfile({ ...profile, [field]: e.target.value });
  };

  // Default profile picture URL
  const defaultProfilePicture = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvW7r1XbT3QFQalKEsRhWmQLvcuI3K3D3m8IzHHVlQa9KdoPqf';

  return (
    <div className="user-profile">
      <div className="user-profile-header">
        <h1>Welcome To User Profile</h1>
      </div>
      <div className="user-profile-content">
        <div className="user-profile-img">
          <img
            src={profile.profilePicture || defaultProfilePicture}
            alt="Profile Picture"
          />
          <input type="file" onChange={handleImageChange} />
        </div>
        <div className="user-profile-details">
          <form>
            <div className="profile-input">
              <label>Full Name:</label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => handleInputChange(e, 'name')}
                readOnly={!editMode}
              />
            </div>
            <div className="profile-input">
              <label>Designation:</label>
              <input
                type="text"
                value={profile.designation}
                onChange={(e) => handleInputChange(e, 'designation')}
                readOnly={!editMode}
              />
            </div>
            <div className="profile-input">
              <label>Email ID:</label>
              <input
                type="text"
                value={profile.email}
                onChange={(e) => handleInputChange(e, 'email')}
                readOnly={!editMode}
              />
            </div>
            <div className="profile-input">
              <label>Password:</label>
              <input
                type="text"
                value={profile.password}
                onChange={(e) => handleInputChange(e, 'password')}
                readOnly={!editMode}
              />
            </div>
            <div className="profile-input">
              <label>Contact:</label>
              <input
                type="text"
                value={profile.contact}
                onChange={(e) => handleInputChange(e, 'contact')}
                readOnly={!editMode}
              />
            </div>
          </form>
          {editMode ? (
            <button type="button" onClick={handleSaveClick}>
              Save
            </button>
          ) : (
            <button type="button" onClick={handleEditClick}>
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
