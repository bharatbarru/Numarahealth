import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../App.css'

function RegisterPage() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate(); // Hook for navigation

  const handleRegister = () => {
    // Save or send the registration data (dummy data for now)
    console.log({
      name,
      age,
      gender,
      email,
      phone,
    });

    alert('Registration successful!');
    
    // Navigate to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2 className="form-title">Register</h2>
        
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="form-input"
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="form-input"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="form-input"
        />
        <button className="form-button" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
}

export default RegisterPage;
