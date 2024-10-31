import React from 'react';
import './HelpCenter.css';

function HelpCenter() {
    return (
    <>
        <div className="help-center">
            <div className="HContainer">    
                <h1>Help Center</h1>
                <p>Welcome to the Help Center for CYBER CRIME PORTAL. We’re here to assist you in navigating the portal, reporting incidents, and ensuring a smooth experience. Below are the most common topics and frequently asked questions (FAQs). If you need further assistance, feel free to contact us.</p>

                <h2>Table of Contents</h2>
                <ul>
                <li><a href="#getting-started">Getting Started</a></li>
                <li><a href="#reporting-incident">Reporting an Incident</a></li>
                <li><a href="#tracking-report">Tracking Your Report</a></li>
                <li><a href="#account-management">Account Management</a></li>
                <li><a href="#faqs">FAQs</a></li>
                <li><a href="#contact-us">Contact Us</a></li>
                </ul>
                <section id="getting-started">
                    <h3>1. Getting Started</h3>
                    <p><strong>What is CYBER CRIME PORTAL?</strong></p>
                    <p>The CYBER CRIME PORTAL helps individuals report cyber crimes, track cases, and access resources for online safety.</p>

                    <p><strong>How do I create an account?</strong></p>
                    <ul>
                        <li>Visit the <a href="/signup">Sign Up page</a>.</li>
                        <li>Fill in the required details.</li>
                        <li>Confirm your email through the verification link.</li>
                        <li>Log in to start reporting incidents.</li>
                    </ul>

                    <p><strong>How do I log in to my account?</strong></p>
                    <p>Go to the <a href="/login">Login page</a> and enter your credentials.</p>
                </section>

                <section id="reporting-incident">
                    <h3>2. Reporting an Incident</h3>
                    <p><strong>How do I report a cyber crime?</strong></p>
                    <ul>
                        <li>Log in and click on <strong>“Report a Crime”</strong>.</li>
                        <li>Fill in the required details: incident type, date, description.</li>
                        <li>Submit the report and receive a tracking number.</li>
                    </ul>

                    <p><strong>What types of cyber crimes can I report?</strong></p>
                    <ul>
                        <li>CyberBullying</li>
                        <li>Identity theft</li>
                        <li>Online fraud</li>
                        <li>Hacking</li>
                        <li>Phishing attacks</li>
                        <li>Other internet-related crimes</li>
                    </ul>
                </section>

                <section id="tracking-report">
                    <h3>3. Tracking Your Report</h3>
                    <p><strong>How do I track my report status?</strong></p>
                    <p>After submitting a report, click on <strong>“My Reports”</strong> in your dashboard to track status updates.</p>

                    <p><strong>What do the different status labels mean?</strong></p>
                    <ul>
                        <li><strong>Pending</strong>: Your report is being reviewed.</li>
                        <li><strong>In Progress</strong>: The investigation is ongoing.</li>
                        <li><strong>Resolved</strong>: The case has been resolved.</li>
                        <li><strong>Closed</strong>: No further actions are being taken.</li>
                    </ul>
                </section>

                <section id="account-management">
                    <h3>4. Account Management</h3>
                    <p><strong>How do I reset my password?</strong></p>
                    <p>Go to the <a href="/forgot-password">Forgot Password page</a> and follow the instructions to reset your password.</p>

                    <p><strong>How do I update my account information?</strong></p>
                    <p>Log in, go to <strong>“Account Settings”</strong>, and update your details.</p>

                    <p><strong>How do I delete my account?</strong></p>
                    <p>Navigate to <strong>“Account Settings”</strong> and select <strong>“Delete Account”</strong>.</p>
                </section>

                <section id="faqs">
                    <h3>5. FAQs</h3>
                    <p><strong>What should I do if I receive threats online?</strong></p>
                    <p>Report the incident using the <strong>“Report a Crime”</strong> feature and block the individual if needed.</p>

                    <p><strong>Is my information kept confidential?</strong></p>
                    <p>Yes, all reports are handled confidentially according to data protection laws.</p>

                    <p><strong>How long does it take for my report to be processed?</strong></p>
                    <p>Processing times vary. You will receive updates through the portal.</p>
                </section>

                <section id="contact-us">
                    <h3>6. Contact Us</h3>
                    <p>If you have any questions or need assistance, reach us through:</p>
                    <ul>
                        <li><strong>Email</strong>: support@cybercrimeportal.com</li>
                        <li><strong>Phone</strong>: +1-800-123-4567</li>
                        <li><strong>Live Chat</strong>: Available 9 AM - 5 PM (Mon-Fri)</li>
                        <li><strong>Support Ticket</strong>: <a href="/support">Submit a Ticket</a></li>
                    </ul>
                </section>
            </div>
        </div>
    </>
  );
};

export default HelpCenter;
