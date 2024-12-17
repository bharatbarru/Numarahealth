import React from 'react'
import { Link } from "react-router-dom";


function Product() {
    return (
        <div className="form-container">
      <div className="form-box">
        <Link to="/login">
          <button className="form-button">LOGIN</button>
        </Link>
        <hr className="form-divider" />
        <Link to="/register">
          <button className="form-button">REGISTER</button>
        </Link>
      </div>
    </div>
      );
}

export default Product