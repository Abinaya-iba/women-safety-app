import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import './SosAlert.css';
import MyMapComponent from './MyMapComponent';
import axios from 'axios';

const SosAlert = () => {
    const [location, setLocation] = useState(null); // State to store location

    // Function to handle the SOS alert button click
    const handleSendSOSAlert = () => {
        // Check if Geolocation is supported by the browser
        if (navigator.geolocation) {
            // Get the current position
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const locationString = `Latitude: ${latitude}, Longitude: ${longitude}`;
                    setLocation(locationString);
                    sendSOSNotification(locationString); // Send location to the backend
                },
                (error) => {
                    console.error('Error fetching location:', error.message);
                    alert('Unable to fetch location. Please enable location services.');
                }
            );
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    };

    // Function to send SOS notification to the backend
const sendSOSNotification = (location) => {
    const alertMessage = 'This is an SOS Alert! I need help immediately.';

    // Make the API call to the backend
    axios.post('http://localhost:3001/send-sos', {
        location: location,
        message: alertMessage,
    })
    .then((response) => {
        console.log(response.data.message);
        alert('SOS Alert sent successfully!');
    })
    .catch((error) => {
        console.error('Error sending SOS Alert:', error.message);
        alert('Failed to send SOS Alert.');
    });
};

    return (
        <div className="sos-alert-container">
            <h1>SOS Alert</h1>

            <div className="sos-alert-content">
                <div className="sos-alert-quarternary-grid">
                    <div className="sos-alert-map-container">
                        <h2>Your Location</h2>
                        <div className="sos-alert-map-wrapper">
                            <MyMapComponent />
                        </div>
                    </div>

                    <div className="sos-alert-sos-module">
                        <h2>SOS Module</h2>
                        <button className="sos-alert-sos-module-button" onClick={handleSendSOSAlert}>
                            Send SOS Alert
                        </button>
                    </div>

                    <div className="sos-alert-emergency-numbers">
                        <h2>Emergency Numbers</h2>
                        <ul>
                            <li>Police: 911</li>
                            <li>Fire Department: 911</li>
                            <li>Ambulance: 911</li>
                            <li>Local Emergency: 123-456-7890</li>
                        </ul>
                    </div>

                    <div className="sos-alert-profile-chatbot">
                        <div className="sos-alert-profile">
                            <h2>Profile</h2>
                            <p>Profile details will be displayed here.</p>
                        </div>
                        <div className="sos-alert-chatbot">
                            <h2>Chat Bot</h2>
                            <p>Chat bot functionality will be integrated here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SosAlert;
