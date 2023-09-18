import React, { useState } from 'react';
import './styles.css'; // Make sure to import your CSS

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
        <img src={"https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_1280.png"} alt={employee.name} />
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
