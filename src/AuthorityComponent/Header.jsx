import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
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
    <div className="ReportStatus">
        <Link id="view-ReportStatus" to='/signup'> [Total Report]</Link>
        <Link id="view-ReportStatus" to='/signup'> [Open Cases]</Link>
        <Link id="view-ReportStatus" to='/signup'> [Under Investigation]</Link>
        <Link id="view-ReportStatus" to='/signup'> [Resolved]</Link>
      </div>
    </>
  )
}

export default Header
