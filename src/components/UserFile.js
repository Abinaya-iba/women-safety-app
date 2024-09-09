// src/components/UserFile.js
import React from 'react';
import './UserFile.css'; // Import the CSS file for UserFile styling

const UserFile = () => {
  return (
    <div className="userfile-container">
      <h2>User File</h2>
      <div className="userfile-details">
        <div className="userfile-photo">
          <img src={'/images/girl1.jpg'} alt="User Profile" className="userfile-pic" />
        </div>
        <div className="userfile-info">
          <div className="userfile-row">
            <div className="userfile-data"><strong>Name:</strong> Avantika</div>
            <div className="userfile-data"><strong>Mobile Number:</strong> 9876543210</div>
            <div className="userfile-data"><strong>Address:</strong> 123 Street Name, City</div>
            <div className="userfile-data"><strong>Alternative Number:</strong> 9123456789</div>
          </div>
          <div className="userfile-row">
            <div className="userfile-data"><strong>Age:</strong> 30</div>
            <div className="userfile-data"><strong>Medical Conditions:</strong> None</div>
            <div className="userfile-data"><strong>Aadhar Card Number:</strong> XXXX-XXXX-XXXX</div>
            <div className="userfile-data"><strong>Date of Birth:</strong> 01/01/1993</div>
          </div>
        </div>
      </div>
      <button className="update-button">Update Details</button>
    </div>
  );
}

export default UserFile;
