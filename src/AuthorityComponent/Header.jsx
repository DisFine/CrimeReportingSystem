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
                <li><a href="/Authorities/HelpCenter">Help Center</a></li>
            </ul>
        </nav>
        <a href="#" className="cta-btn">Report Now</a>
        <div className="mobile-menu">
            <i className="fas fa-bars"></i>
        </div>
    </div>
    <div className="ReportStatus">
        <Link id="view-ReportStatus" to='/Authorities'> [Total Report]</Link>
        <Link id="view-ReportStatus" to='/Authorities/OpenCases'> [Open Cases]</Link>
        <Link id="view-ReportStatus" to='/Authorities/OngoingCases'> [Under Investigation]</Link>
        <Link id="view-ReportStatus" to='/Authorities/ClosedCases'> [Resolved]</Link>
      </div>
    </>
  )
}

export default Header
