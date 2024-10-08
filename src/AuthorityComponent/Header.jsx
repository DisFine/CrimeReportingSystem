import React,{ useState, useEffect } from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
import { supabase } from '../createClient';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const [countTR, setCountTR] = useState(0);
  const [countOC, setCountOC] = useState(0);
  const [countUI, setCountUI] = useState(0);
  const [countR, setCountR] = useState(0);

  useEffect(() => {
      fetchTotalReports()
      fetchOpenCases()
      fetchUnderInvestigation()
      fetchResolved()
      RQS()
  }, [location]);

  async function fetchTotalReports() {
      const { count } = await supabase
      .from('case_management')
      .select('*', { count: 'exact' })
      setCountTR(count)
  }

  async function fetchOpenCases() {
      const { count } = await supabase
      .from('case_management')
      .select('*', { count: 'exact' })
      .eq('Status', 'Awaiting Action')
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

  async function RQS() {
    var Quick_Stats = document.querySelector(".Quick-Stats");
    if (window.location.pathname === "/HelpCenter") { 
        if (Quick_Stats) {
          Quick_Stats.style.display = "none"; 
        }
    }
    else {
      Quick_Stats.style.display = "block"; 
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
                {/* <li><a href="#">Case Status</a></li> */}
                <li><a href="/HelpCenter">Help Center</a></li>
            </ul>
        </nav>
        <a href="#" className="cta-btn">Report Now</a>
      </div>
      <div className="ReportStatus">
        <Link id="view-ReportStatus" to='/Authorities'> [Total Report]</Link>
        <Link id="view-ReportStatus" to='/Authorities/OpenCases'> [Open Cases]</Link>
        <Link id="view-ReportStatus" to='/Authorities/OngoingCases'> [Under Investigation]</Link>
        <Link id="view-ReportStatus" to='/Authorities/ClosedCases'> [Resolved]</Link>
      </div>
      <div className="Quick-Stats">
        Quick Stats:  
        <p>- Total Reports: <span>{countTR}</span></p>                                  
        <p>- Open Cases: <span>{countOC}</span></p>                                    
        <p>- Under Investigation: <span>{countUI}</span></p>                               
        <p>- Resolved: <span>{countR}</span></p>      
      </div>
    </>
  )
}

export default Header
