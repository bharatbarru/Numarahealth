import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../App.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Dummy login credentials
    const dummyEmail = 'admin@admin.com';
    const dummyPassword = 'admin123';

    // Check if the email and password match the dummy credentials
    if (email === dummyEmail && password === dummyPassword) {
      // Redirect to the Dashboard page on success
      navigate('/dashboard');
    } else {
      setErrorMessage('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </div>
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
