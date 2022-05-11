import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="container">
      <div>
        <h1 id="logo">ALGO</h1>
      </div>
      <div>
        <ul className="links">
          <li>Binary Search</li>
          <li>Bubble Search</li>
          <li>Tree</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
