import React from "react";
import { Link } from "react-router-dom";
// Corrected image imports
import icon from '../images/product.jpg'; 
import icon1 from '../images/productresearch.jpg'; 
import './../App.css'

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      {/* Welcome Block */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h3 style={{ fontWeight: "bold" }}>Welcome to NumaraHealth.ai</h3>
        <h6 style={{ marginTop: "10px", fontSize: "1.1rem" }}>
          Your one-stop solution for innovative health products and research.
        </h6>
      </div>

      {/* Cards Section */}
      <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
        {/* Product Card */}
        <Link to="/product" style={{ textDecoration: "none", maxWidth: "345px", borderRadius: "8px", padding: "20px", cursor: "pointer" }}>
          <div style={{ textAlign: "center" }}>
            <img src={icon} alt="Product" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }} />
            <h4 className="header-logo">Product</h4>
          </div>
        </Link>

        {/* Product Research Card */}
        <Link to="/productresearch" style={{ textDecoration: "none", maxWidth: "345px", borderRadius: "8px", padding: "20px", cursor: "pointer" }}>
          <div style={{ textAlign: "center" }}>
            <img src={icon1} alt="Product Research" style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" }} />
            <h4 className="header-logo">Product Research</h4>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
