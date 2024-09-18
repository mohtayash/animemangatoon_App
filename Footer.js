import React from "react";
import logo from "../Assests/animemanga250-copy-3.png";

const Footersection = () => {
  return (
    <footer>
      <div style={{ textAlign: 'center', backgroundColor: 'black', padding: '50px' }}>
        {/* Logo Section */}
        <div>
          <img src={logo} alt="logo" style={{ backgroundColor: 'white' }} />
        </div>

        {/* Links Section */}
        <div style={{
          display: 'flex',
          color: 'white',
          justifyContent: 'space-between',
          padding: '40px 200px'
        }}>
          <p>Home</p>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Corrections Policy</p>
          <p>Terms of Use</p>
          <p>Copyright Policies</p>
          <p>Editorial</p>
          <p>Ethics Policy</p>
          <p>Fact Checking Policy</p>
          <p>Ownership Policy</p>
        </div>

        {/* Copyright Section */}
        <div>
          <p style={{ color: '#dd9933' }}>© Copyright 2024 AnimeMangaToon | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footersection;
