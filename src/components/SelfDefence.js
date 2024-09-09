import React from 'react';
import './SelfDefence.css'; // Import the updated CSS file

const SelfDefence = () => {
    return (
        <div className="self-defence-container">
            <h1>Self Defence</h1>
            <p>Learn essential self-defence techniques and tips to improve both your physical and mental resilience.</p>
            <section className="pictorial-representation">
                <h2>Visual Guides</h2>
                <div className="image-gallery">
                    <img src="/images/fight1.jpg" alt="Self Defence Technique 1" />
                    <img src="/images/fight2.jpg" alt="Self Defence Technique 2" />
                    <img src="/images/fight3.jpg" alt="Self Defence Technique 3" />
                </div>
                <section className="video-section">
                <h2>Self Defence Video Tutorials</h2>
                <div className="video-grid">
                    <div className="video-item">
                        <video controls>
                            <source src="/videos/safety1video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="video-item">
                        <video controls>
                            <source src="/videos/safety2video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="video-item">
                        <video controls>
                            <source src="/videos/safety3video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </section>
                <p>Refer to the images above to understand and practice various self-defence techniques.</p>
            </section>
            <section className="self-defence-content">
                <h2>Essential Self-Defence Techniques</h2>
                <div className="quarternary-grid">
                    <div>
                        <h3>Situational Awareness</h3>
                        <p>Always be aware of your surroundings and avoid risky situations when possible.</p>
                    </div>
                    <div>
                        <h3>Effective Communication</h3>
                        <p>Use assertive language and body posture to deter potential threats.</p>
                    </div>
                    <div>
                        <h3>Basic Self-Defence Moves</h3>
                        <p>Learn and practice fundamental moves like strikes, blocks, and escapes.</p>
                    </div>
                    <div>
                        <h3>Defensive Stance</h3>
                        <p>Adopt a balanced and ready stance to react swiftly.</p>
                    </div>
                    <div>
                        <h3>Personal Safety Tools</h3>
                        <p>Consider carrying tools like pepper spray or a personal alarm and know how to use them.</p>
                    </div>
                </div>

                <h2>Improving Boldness: Physically and Mentally</h2>
                <div className="quarternary-grid">
                    <div>
                        <h3>Regular Exercise</h3>
                        <p>Engage in physical activities to build strength and confidence.</p>
                    </div>
                    <div>
                        <h3>Mental Resilience Training</h3>
                        <p>Practice mindfulness and stress management techniques to stay calm under pressure.</p>
                    </div>
                    <div>
                        <h3>Self-Defence Classes</h3>
                        <p>Join self-defence classes to gain practical experience and build confidence.</p>
                    </div>
                    <div>
                        <h3>Positive Affirmations</h3>
                        <p>Use positive affirmations to boost your self-esteem and mental fortitude.</p>
                    </div>
                    <div>
                        <h3>Healthy Lifestyle</h3>
                        <p>Maintain a balanced diet and get adequate rest to support overall well-being.</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default SelfDefence;
