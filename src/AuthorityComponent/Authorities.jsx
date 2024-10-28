import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { supabase } from '../createClient';
import './Authorities.css';

function Authorities() {

    const [users, setUsers] = useState([]);
    const [officers, setOfficers] = useState([]);
    const [ShowUpdateStatus, setShowUpdateStatus] = useState(false)
    const [ShowOfficersAvailable, setShowOfficersAvailable] = useState(false)
    const [ViewDetails, setViewDetails] = useState(false)
    const [ViewEvidence, setViewEvidence] = useState(false)
    useEffect(() => {
        fetchUsers()
        FetchOfficers()
        updateStatus()
        AssignOfficers()
    }, []);

    async function fetchUsers() {
        const { data } = await supabase
        .from('case_management')
        .select('*');
        setUsers(data)
    }

    async function FetchOfficers() {       
        const { data } = await supabase
        .from('Officers_List')
        .select('*')
        setOfficers(data)
    }
    
    async function updateStatus(caseNumber, newStatus) {
        const { data, error } = await supabase
        .from('case_management')
        .update({ Status: newStatus })
        .eq('Case_Number', caseNumber)
        .select();

        if (error) console.error('Error updating status:', error);
        else {
            console.log('Status updated:', data);
            fetchUsers();
        }
    }

    const AssignOfficers = async (caseNumber, newOfficerId) => {
        const currentOfficerId = users.find(item => item.Case_Number === caseNumber)?.Assigned_Officer_ID;
    
        if (currentOfficerId) {
            await supabase
            .from('Officers_List')
            .update({ Status: 'Available' })
            .eq('ID', currentOfficerId);
        }

        await supabase
        .from('case_management')
        .update({ Assigned_Officer_ID: newOfficerId })
        .eq('Case_Number', caseNumber);
    
        await supabase
        .from('Officers_List')
        .update({ Status: 'Not Available' })
        .eq('ID', newOfficerId); 

        await fetchUsers();
        await FetchOfficers();
    };  
    


    return (
    <>
      <div className="Table">
        <h2> CASE MANAGEMENT (Table of Cases) </h2>
        <table id="AuthTable">
            <thead>
                <tr>
                    <th>Case Number</th>
                    <th>Crime Type</th>
                    <th>Incident Location</th>
                    <th>Reported Date</th>
                    <th>Status</th>
                    {ShowUpdateStatus && (<th>Update Status</th>)}
                    {ShowOfficersAvailable && (<th>Officer</th>)}
                    {ViewDetails && (<th>View Details</th>)}
                    {ViewEvidence && (<th>View Evidence</th>)}
                </tr>
            </thead>
            <tbody>
                {users
                    .slice() // Create a shallow copy of the users array
                    .sort((a, b) => a.Case_Number - b.Case_Number) // Sort by Case_Number in ascending order
                    .map((item, index) => (
                        <tr key={index}>
                            <td>{item.Case_Number}</td>
                            <td>{item.Crime_Type}</td>
                            <td>{item.Incident_Location}</td>
                            <td>{item.Report_Date}</td>
                            <td>{item.Status}</td>
                            {ShowUpdateStatus && (
                                <td>
                                    <select 
                                        id={`status-${item.Case_Number}`}
                                        className="status-select"
                                        onChange={(e) => updateStatus(item.Case_Number, e.target.value)}
                                        value={item.Status}
                                    >
                                        <option value="">Select Status</option>
                                        <option value="Open Case">Open Case</option>
                                        <option value="Under Investigation">Under Investigation</option>
                                        <option value="Resolved">Resolved</option>
                                        <option value="Closed Case">Closed Case</option>
                                    </select>
                                </td>
                            )}
                            {ShowOfficersAvailable && (
                                <td>
                                    {item.Status === "Closed Case" || item.Status === "Resolved" ? (
                                        officers.find(officer => officer.ID === item.Assigned_Officer_ID)?.Officer_Name || 'Not Assigned'
                                    ) : (
                                        <select 
                                            id={`status-${item.Case_Number}`}
                                            className="Officer-select"
                                            onChange={(e) => AssignOfficers(item.Case_Number, e.target.value)}
                                            value={item.Assigned_Officer_ID}
                                        >
                                            {item.Assigned_Officer_ID ? (
                                                <option value={item.Assigned_Officer_ID}>
                                                    {officers.find(officer => officer.ID === item.Assigned_Officer_ID)?.Officer_Name}
                                                </option>
                                            ) : (
                                                <option value="">Select Officer</option>
                                            )}
                                            {officers.filter(officer => officer.Status === 'Available').map((officer) => (
                                                <option key={officer.ID} value={officer.ID}>
                                                    {officer.Officer_Name}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                </td> 
                            )}
                            {ViewDetails && (
                                <td>
                                    <Link to={`/Authorities/Details/${item.Case_Number}`}> [View Details] </Link>
                                </td>
                            )}
                            {ViewEvidence && (
                                <td>
                                    <Link to={`/Authorities/Evidence/${item.Case_Number}`}> [View Evidence] </Link>
                                </td>
                            )}
                        </tr>
                    )
                )}
            </tbody>
        </table>
      </div>
      <div className="ViewDetails">
        <button className="view-Details" onClick={() => setViewDetails(!ViewDetails)}> [View Details] </button>
        <Link className="view-Details" to='/Authorities/OfficerDetails'> [Officer Details] </Link>
        <button className="view-Details" onClick={() => setShowOfficersAvailable(!ShowOfficersAvailable)}> [Assign Officer] </button>
        <button className="view-Details" onClick={() => setShowUpdateStatus(!ShowUpdateStatus)}> [update Status] </button>
        <button className="view-Details" onClick={() => setViewEvidence(!ViewEvidence)}> [Evidence] </button>
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
                      <li><a href="#">Official Crime Portal</a></li>
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
