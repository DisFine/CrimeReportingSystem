import React,{ useState, useEffect } from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import { supabase } from '../createClient';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const [users, setUsers] = useState([]);
  const [countTR, setCountTR] = useState(0);
  const [countOC, setCountOC] = useState(0);
  const [countUI, setCountUI] = useState(0);
  const [countR, setCountR] = useState(0);
  const [countCC, setCountCC] = useState(0);

  useEffect(() => {
      fetchTotalReports()
      fetchOpenCases()
      fetchUnderInvestigation()
      fetchResolved()
      fetchClosedCase()
      RQS()
  }, [location]);

  async function fetchTotalReports() {
      const { data, count } = await supabase
      .from('case_management')
      .select('*', { count: 'exact' })
      setCountTR(count)
      setUsers(data)
  }

  async function fetchOpenCases() {
      const { count } = await supabase
      .from('case_management')
      .select('*', { count: 'exact' })
      .eq('Status', 'Open Case')
      setCountOC(count)
  }

  async function fetchUnderInvestigation() {
      const { count } = await supabase
      .from('case_management')
      .select('*', { count: 'exact' })
      .eq('Status', 'Under Investigation')
      setCountUI(count)
  }

  async function fetchResolved() {
      const { count } = await supabase
      .from('case_management')
      .select('*', { count: 'exact' })
      .eq('Status', 'Resolved')
      setCountR(count)
  }

  async function fetchClosedCase() {
      const { count } = await supabase
      .from('case_management')
      .select('*', { count: 'exact' })
      .eq('Status', 'Closed Case')
      setCountCC(count)
  }

  async function RQS() {
    const Quick_Stats = document.querySelector(".Quick-Stats");
    const currentPath = window.location.pathname;

    const shouldHideQuickStats = ["/Authorities/HelpCenter"].includes(currentPath)
      || users.some(item => currentPath === `/Authorities/Details/${item.Case_Number}`) 
      || users.some(item => currentPath === `/Authorities/Evidence/${item.Case_Number}`);

    if (Quick_Stats) {
        Quick_Stats.style.display = shouldHideQuickStats ? "none" : "block";
    }
  }

  return (
    <>
      <div className="header-container">
        <div className="logo">
            <h1><a href="#">Crime Reporting System</a></h1>
        </div>
        <nav>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="https://www.cybercrime.gov.in/">Official Crime Portal</a></li>
                <li><a href="/Authorities/HelpCenter">Help Center</a></li>
            </ul>
        </nav>
        <a href="#" className="cta-btn">Report Now</a>
      </div>
      <div className="ReportStatus">
        <Link id="view-ReportStatus" to='/Authorities'> [Total Report]</Link>
        <Link id="view-ReportStatus" to='/Authorities/OpenCases'> [Open Cases]</Link>
        <Link id="view-ReportStatus" to='/Authorities/OngoingCases'> [Under Investigation]</Link>
        <Link id="view-ReportStatus" to='/Authorities/ResolvedCases'> [Resolved]</Link>
        <Link id="view-ReportStatus" to='/Authorities/ClosedCases'> [Closed Case]</Link>
      </div>
      <div className="Quick-Stats">
        Quick Stats:  
        <p>- Total Reports: <span>{countTR}</span></p>                                  
        <p>- Open Cases: <span>{countOC}</span></p>                                    
        <p>- Under Investigation: <span>{countUI}</span></p>                               
        <p>- Resolved: <span>{countR}</span></p>      
        <p>- Closed Cases: <span>{countCC}</span></p>      
      </div>
    </>
  )
}

export default Header
