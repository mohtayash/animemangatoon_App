import React, { useState } from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';

const BellIcon = () => {
  const [isHovered, setIsHovered] = useState(false); // Hover state

  const iconStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: 'red', // Background color
    color: '#fff', // Bell icon color
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Adds shadow
    cursor: 'pointer',
  };

  const tooltipStyle = {
    position: 'absolute',
    bottom: '90px', // Distance from the bell icon
    right: '20px',
    backgroundColor: 'black',
    color: 'white',
    padding: '8px',
    borderRadius: '5px',
    fontSize: '14px',
    visibility: isHovered ? 'visible' : 'hidden', // Show when hovered
    opacity: isHovered ? 1 : 0, // Smooth appearance
    transition: 'opacity 0.3s ease',
  };

  return (
    <div>
      {/* Tooltip that appears on hover */}
      <div style={tooltipStyle}>Hey, Let's make an amazing bond together,Subscribe</div>

      {/* Bell icon */}
      <div
        style={iconStyle}
        onMouseEnter={() => setIsHovered(true)}  // Show tooltip on hover
        onMouseLeave={() => setIsHovered(false)} // Hide tooltip when not hovering
      >
        <NotificationsIcon style={{ fontSize: '30px',border:'1px solid white',borderRadius:'20px' }} />
      </div>
    </div>
  );
};

export default BellIcon;
