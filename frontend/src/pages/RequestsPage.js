import { useState } from "react"

import Nav from "../components/Nav"
import RequestEventBox from "../components/RequestEventBox";
import RequestRSOBox from "../components/RequestRSOBox";

// temp date for styling
const date = new Date();

// temp event for styling
const tempEvent = {
    id:'0',
    name: 'UCF Database Project',
    host: 'UCF',
    location: 'L3Harris Engineering Center Room 115',
    category: 'Tech',
    time: '3pm',
    date: `${date.toDateString()}`,
    type: 'Public',
    email: 'example@gmail.com',
    phone: '123-123-4567',
    description: `You are asked to implement a web-based application that solves the problems. Any student
    (user) may register with the application to obtain a user ID and a password. There are three
    user levels: super admin who creates a profile for a university (name, location, description,
    number of students, pictures, etc.), admin who owns an RSO and may host events, and student
    who uses the application to look up information about the various events.`
}

const tempRSO = {
    id: 0,
    name: 'UCF Soccer',
    type: 'Club',
    numMembers: 4,
    members: ['Colin Billingsley', 'Joshua Easterling', 'Jordan Morillo', 'Guest User'],
    email: 'abc_example@gmail.com',
    phone: '123-456-7890',
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quidem nesciunt eligendi, suscipit vel corrupti unde, inventore placeat possimus quas necessitatibus aperiam. Expedita, perspiciatis? Qui, natus! Eius commodi nemo cum.`
}

const RequestsPage = () => {
    const [userLevel, setUserLevel] = useState(2);
    const [eventRequests, setEventRequests] = useState([tempEvent]);
    const [rsoRequests, setRsoRequests] = useState([tempRSO]);

    return (
        <div className="requests-page">
            <Nav userLevel={userLevel}/>
            <div className="requests-page-container">
                <div className="event-requests-container">
                    <h2 className="request-heading">Event Requests</h2>
                    <div className="event-request-cards-container">
                        <ul className="list-of-events">
                            {/* check if there's any event requests in database */}
                            {(eventRequests.length === 0) 
                                // if no events found, display message
                                ? 
                                <li><p className="no-data">You currently have no event requests at the moment.</p></li> 
                                // if events found, display all events
                                :
                                eventRequests.map((event, index) => {
                                    return (
                                        <li className="event-item"><RequestEventBox event={event}/></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

                <div className="rso-requests-container">
                    <h2 className="request-heading">RSO Requests</h2>
                    <ul className="list-of-events">
                        {/* check if there's any rso requests in database for university*/}
                        {(rsoRequests.length === 0) 
                            // if no rsos found, display message
                            ? 
                            <li><p className="no-data">You currently have no RSO requests at the moment.</p></li> 
                            // if rsos found, display all rsos
                            :
                            rsoRequests.map((rso, index) => {
                                return (
                                    <li className="event-item"><RequestRSOBox rso={rso}/></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RequestsPage
