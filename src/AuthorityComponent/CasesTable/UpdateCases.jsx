import React,{ useState, useEffect } from 'react'
import { supabase } from '../../createClient'

function UpdateCases() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchUsers()
    }, []);

    async function fetchUsers() {
        const { data } = await supabase
        .from('case_management')
        .select('*');
        setUsers(data)
    }
    return (
    <>
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
                {users.map((item,index) => (      
                    <tr key={index}>
                        <td>{item.Case_Number}</td>
                        <td>{item.Crime_Type}</td>
                        <td>{item.Incident_Location}</td>
                        <td>{item.Report_Date}</td>
                        <td>{item.Status}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </>
    )
}

export default UpdateCases
