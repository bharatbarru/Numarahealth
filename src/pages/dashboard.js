import React, { useState } from 'react';
import './../App.css'

function Dashboard() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the Dashboard!</h1>
      <p>You have successfully logged in.</p>
      
      <div className="file-upload-container">
        <h3>Upload Doctor Prescription</h3>
        <div className="file-upload-box">
          <input 
            type="file" 
            onChange={handleFileChange}
            id="file-upload" 
            className="file-input"
          />
          <label htmlFor="file-upload" className="file-label">
            <span>Drag & Drop your files here or click to select</span>
          </label>
          {file && <p>File selected: {file.name}</p>}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
