import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
    return (
        <div className="about-container">
            <h1>About</h1>
            <p>This app is designed to enhance women's safety with various features and tools.</p>
            
            <section className="about-content">
                <h2>Uses of Our Application</h2>
                <div className="quarternary-grid">
                    <div>
                        <h3>Emergency Alerts</h3>
                        <p>Quickly alert friends, family, or authorities in case of an emergency.</p>
                    </div>
                    <div>
                        <h3>Safety Tips</h3>
                        <p>Receive practical tips and advice on staying safe in different situations.</p>
                    </div>
                    <div>
                        <h3>Real-Time Tracking</h3>
                        <p>Share your location with trusted contacts for added security.</p>
                    </div>
                    <div>
                        <h3>Self-Defence Guidance</h3>
                        <p>Access tutorials and techniques to help protect yourself in dangerous situations.</p>
                    </div>
                </div>

                <h2>Details of Our Application</h2>
                <div className="quarternary-grid">
                    <div>
                        <h3>Innovative Features</h3>
                        <p>Our app includes cutting-edge features designed for modern safety needs.</p>
                    </div>
                    <div>
                        <h3>User-Friendly Interface</h3>
                        <p>Easy-to-navigate design ensures quick access to all essential features.</p>
                    </div>
                    <div>
                        <h3>Privacy Protection</h3>
                        <p>Your data is secure with our robust privacy measures and encryption.</p>
                    </div>
                    <div>
                        <h3>Support and Updates</h3>
                        <p>Regular updates and support to ensure the app stays effective and reliable.</p>
                    </div>
                </div>
            </section>

            <section className="people-saved">
                <h2>Photos of People Saved</h2>
                <div className="image-gallery">
                    <img src="/images/girl11.jpeg" alt="Person Saved 1" />
                    <img src="/images/girl22.jpg" alt="Person Saved 2" />
                    <img src="/images/girl33.jpeg" alt="Person Saved 3" />
                </div>
                <p>These are some of the individuals who have benefited from our app.</p>
            </section>

            <section className="about-bot">
                <h2>About Our Bot</h2>
                <p>Our bot provides automated assistance and information, helping users navigate the app and access resources quickly.</p>
            </section>

            <section className="self-defence-info">
                <h2>Self-Defence</h2>
                <p>We offer self-defence training and resources to empower users with the knowledge and skills to protect themselves.</p>
            </section>

            <section className="how-to-use">
                <h2>How to Use the App Properly</h2>
                <p>Follow our step-by-step guide to make the most out of the app’s features and ensure your safety.</p>
            </section>
        </div>
    );
};

export default About;
