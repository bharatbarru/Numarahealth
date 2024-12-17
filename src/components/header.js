import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "./../App.css";  // Assuming you're styling in App.css

function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        {/* Logo Section */}
        <div className="header-logo">
          <h1>NumaraHealth</h1>
        </div>

        {/* Navigation Section */}
        <nav className="header-navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/productresearch">Product Research</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
