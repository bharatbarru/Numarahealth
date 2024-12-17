import React from "react";
import { Link } from "react-router-dom";
import "./../App.css"; 

function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
 
        <div className="header-logo">
       <h1>NumaraHealth.ai</h1>
        </div>

        <nav className="header-navigation">
          <ul>
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/product" className="nav-link">Product</Link></li>
            <li><Link to="/productresearch" className="nav-link">Product Research</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
