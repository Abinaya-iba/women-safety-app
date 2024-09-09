import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import UserFile from './components/UserFile';
import DataHistory from './components/DataHistory';
import SelfDefence from './components/SelfDefence';
import SosAlert from './components/SosAlert';
import About from './components/About';
import './components/styles.css'; // Import the CSS file

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <nav className="navbar">
                    <ul className="nav-list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/user-file">User File</Link></li>
                        <li><Link to="/data-history">Data History</Link></li>
                        <li><Link to="/self-defence">Self Defence</Link></li>
                        <li><Link to="/sos-alert">SOS Alert</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>

                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/user-file" element={<UserFile />} />
                        <Route path="/data-history" element={<DataHistory />} />
                        <Route path="/self-defence" element={<SelfDefence />} />
                        <Route path="/sos-alert" element={<SosAlert />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
