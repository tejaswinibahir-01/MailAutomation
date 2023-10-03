import React, { useState } from 'react';
import './Employee.css'; // Make sure to import your CSS
import Profile_Img from "./Assets/Profile_Img.png";

const ProfileCard = ({ employee }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={`profile-card-container ${isHovered ? '' : 'hidden'}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="profile-image">
        <img src={Profile_Img} alt={employee.name} />
      </div>
      <div className="employee-name">
        {employee.name /* Add employee name here */}
      </div>
      <div className="employee-designation">
        {employee.designation /* Add employee designation here */}
      </div>
    </div>
  );
};

export default ProfileCard;
