import React from 'react'
import { Link } from 'react-router-dom';
import './Authorities.css';
const Authorities = () => {
  return (
    <>
      <div className="ReportStatus">
        <Link id="view-Rbtn" to='/signup'> [Total Report]</Link>
        <Link id="view-Rbtn" to='/signup'> [Open Cases]</Link>
        <Link id="view-Rbtn" to='/signup'> [Under Investigation]</Link>
        <Link id="view-Rbtn" to='/signup'> [Resolved]</Link>
      </div>
      <div className="Quick-Stats">
        Quick Stats:  
        <p>- Total Reports: <span>350</span></p>                                  
        <p>- Open Cases: <span>120</span></p>                                    
        <p>- Under Investigation: <span>50</span></p>                               
        <p>- Resolved: <span>180</span></p>      
      </div>

      <div className="Table">
        <h2> CASE MANAGEMENT (Table of Cases) </h2>
        <table id="AuthTable">
          <thead>
              <tr>
                  <th>Case Number </th>
                  <th>Crime Type</th>
                  <th>Incident Location</th>
                  <th>Reported Date</th>
                  <th>Status</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td><button className="view-btn">View</button></td>
              </tr>
              <tr>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td><button className="view-btn">View</button></td>
              </tr>
              <tr>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td><button className="view-btn">View</button></td>
              </tr>
              <tr>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td><button className="view-btn">View</button></td>
              </tr>
              <tr>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td><button className="view-btn">View</button></td>
              </tr>
              <tr>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td><button className="view-btn">View</button></td>
              </tr>
              <tr>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td><button className="view-btn">View</button></td>
              </tr>
              <tr>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td><button className="view-btn">View</button></td>
              </tr>
              <tr>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td><button className="view-btn">View</button></td>
              </tr>
              <tr>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td><button className="view-btn">View</button></td>
              </tr>
              <tr>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td><button className="view-btn">View</button></td>
              </tr>
              <tr>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td><button className="view-btn">View</button></td>
              </tr>
              <tr>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td><button className="view-btn">View</button></td>
              </tr>
              <tr>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td><button className="view-btn">View</button></td>
              </tr>
              <tr>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td>NA</td>
                  <td><button className="view-btn">View</button></td>
              </tr>

          </tbody>
        </table>
      </div>
      <div className="ViewDetails">
        <Link id="view-Details" to='/signup'> [View Details] </Link>
        <Link id="view-Details" to='/signup'> [Assign Officer] </Link>
        <Link id="view-Details" to='/signup'> [Update Status] </Link>
        <Link id="view-Details" to='/signup'> [Evidence] </Link>
      </div>
        <footer>
          <div className="footer-container">
              <div className="footer-section about">
                  <h3>Cyber Crime Reporting System</h3>
                  <p>We provide a secure platform for reporting cybercrimes and ensuring justice through detailed investigations.</p>
              </div>

              <div className="footer-section links">
                  <h3>Quick Links</h3>
                  <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Report a Crime</a></li>
                      <li><a href="#">Case Status</a></li>
                      <li><a href="#">Help Center</a></li>
                  </ul>
              </div>

              <div className="footer-section contact">
                  <h3>Contact Us</h3>
                  <ul>
                      <li><i className="fas fa-envelope"></i> support@cybercrime.com</li>
                      <li><i className="fas fa-phone"></i> +1 (800) 123-4567</li>
                      <li><i className="fas fa-map-marker-alt"></i> 123 Cyber Lane, Tech City</li>
                  </ul>
              </div>

              <div className="footer-section social">
                  <h3>Follow Us</h3>
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
          </div>

          <div className="footer-bottom">
              <p>&copy; 2024 Cyber Crime Reporting System. All Rights Reserved.</p>
          </div>
      </footer>
    </>
  )
}

export default Authorities
