// src/components/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Hardcoded credentials for demonstration purposes
        const hardcodedUsername = 'user';
        const hardcodedPassword = 'password';

        // Check if the entered credentials match the hardcoded ones
        if (username === hardcodedUsername && password === hardcodedPassword) {
            // Save login state (in local storage, session, etc.)
            localStorage.setItem('isAuthenticated', 'true');

            // Redirect to the home page after successful login
            navigate('/');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
