import { useState } from "react"
import Nav from "../components/Nav"

const RequestsPage = () => {
    const [userLevel, setUserLevel] = useState(2);
    const [eventRequests, setEventRequests] = useState([]);
    const [rsoRequests, setRsoRequests] = useState([]);

    return (
        <div className="requests-page">
            <Nav userLevel={userLevel}/>
            <div className="requests-page-container">
                <div className="event-requests-container">
                    <h2 className="request-heading">Event Requests</h2>
                    {eventRequests.length === 0 
                    ? <p className="no-data">You currently have no event requests at the moment.</p>
                    : ''}
                </div>

                <div className="rso-requests-container">
                    <h2 className="request-heading">RSO Requests</h2>
                    {rsoRequests.length === 0 
                    ? <p className="no-data">You currently have no RSO requests at the moment.</p>
                    : ''}
                </div>
            </div>
        </div>
    )
}

export default RequestsPage
