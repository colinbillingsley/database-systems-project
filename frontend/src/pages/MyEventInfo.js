import { useState, useEffect } from "react";

import Nav from "../components/Nav";
import EventContent from "../components/EventContent";

// temp date for styling
const date = new Date();

// temp event for styling
const tempEvent = {
    id:'0',
    name: 'UCF Database Project',
    orgName: 'UCF',
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

const MyEventInfo = () => {
    const [eventInfo, setEventInfo] = useState('');
    const [userLevel, setUserLevel] = useState(1);
    const [eventStatus, setEventStatus]= useState('');

    useEffect(() => {
        // get event data and set to eventInfo
        setEventInfo(tempEvent);
        setEventStatus('Accepted');
    }, [])

    return (
        <div className="event-info">
            <Nav userLevel={userLevel}/>
            <div className="event-info-container">
                <div className="event-info-left-content">
                    <EventContent eventInfo={eventInfo}/>
                    <div className="event-status-container">
                        <h2 className="my-event-info-heading">Event Approval Status</h2>
                        <p className={`event-status  + ${eventStatus === 'Accepted' ? 'accepted' : eventStatus === 'Pending' ? 'pending' : 'denied'}`}>{eventStatus}</p>
                    </div>
                </div>

                <div className="event-info-right-content">
                    <div className="location-section">
                        <h3>Location</h3>
                        <p>{eventInfo.location}</p>
                    </div>
                    <hr />
                    <div className="contact-section">
                        <h3>Contact Info</h3>
                        <p>{eventInfo.orgName}</p>
                        <p>{eventInfo.email}</p>
                        <p>{eventInfo.phone}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyEventInfo
