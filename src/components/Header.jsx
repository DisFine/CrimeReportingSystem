import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="logo">
            <h1><a href="#">Cyber Crime Reporting</a></h1>
        </div>
        <nav>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Report a Crime</a></li>
                <li><a href="#">Case Status</a></li>
                <li><a href="#">Help Center</a></li>
            </ul>
        </nav>
        <a href="#" className="cta-btn">Report Now</a>
        <div className="mobile-menu">
            <i className="fas fa-bars"></i>
        </div>
    </div>
    </>
  )
}

export default Header
