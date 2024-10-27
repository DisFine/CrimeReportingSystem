import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../../createClient';

function Details() {
    const { caseNumber } = useParams();
    const [caseDetails, setCaseDetails] = useState(null);

    useEffect(() => {
        const fetchCaseDetails = async () => {
            const { data, error } = await supabase
                .from('case_management')
                .select('*')
                .eq('Case_Number', caseNumber)
                .single();

            if (error) {
                console.error('Error fetching case details:', error);
            } else {
                setCaseDetails(data);
            }
        };

        fetchCaseDetails();
    }, [caseNumber]);

    if (!caseDetails) return <p>Loading case details...</p>;

    return (
        <>
            <div className="Case_Details">
                <h2>Case Details for Case #{caseNumber}</h2>
                <p><strong>Crime Type:</strong> {caseDetails.Crime_Type}</p>
                <p><strong>Incident Location:</strong> {caseDetails.Incident_Location}</p>
                <p><strong>Reported Date:</strong> {caseDetails.Report_Date}</p>
                <p><strong>Status:</strong> {caseDetails.Status}</p>
                <p className='Description'><strong>Case Description:</strong> {caseDetails.Case_Description}</p>
                {/* Additional case details */}
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
    );
}

export default Details;
