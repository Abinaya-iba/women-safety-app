import React from 'react';
import './DataHistory.css'; // Import the CSS file for styling

const DataHistory = () => {
    return (
        <div className="data-history-container">
            <section className="data-history-title">
                <h1>Data History</h1>
                <p>View your past alerts and safety data.</p>
            </section>

            <section className="data-history-section">
                <h2>User Data</h2>
                <p>Your past alerts, logs, and other safety data will be displayed here.</p>
                {/* Add more detailed user data here */}
            </section>

            <section className="data-history-section">
                <h2>Audio Records</h2>
                <audio controls>
                    <source src="your-audio-file.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                {/* Add additional audio records here */}
            </section>

            <section className="data-history-section">
                <h2>Video Records</h2>
                <video controls width="100%">
                    <source src="your-video-file.mp4" type="video/mp4" />
                    Your browser does not support the video element.
                </video>
                {/* Add additional video records here */}
            </section>

            <section className="data-history-section">
                <h2>Chat Bot</h2>
                <div className="chatbot-container">
                    <p>Chat bot functionality will be integrated here.</p>
                    {/* Include chatbot component here */}
                </div>
            </section>
        </div>
    );
};

export default DataHistory;
