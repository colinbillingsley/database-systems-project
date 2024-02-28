import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from "@fortawesome/free-solid-svg-icons";

import Nav from "../components/Nav"
import Comments from "../components/Comments";
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

const tempComment = {
    id: 0,
    username: 'colinbillingsley',
    comment: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nesciunt voluptates voluptatibus enim praesentium deserunt quidem, consequuntur magni, laboriosam dolorem fuga explicabo. Nesciunt qui accusantium amet eaque voluptas dolorem dolorum!`
}

const EventInfo = () => {
    const [eventInfo, setEventInfo] = useState('');
    const [eventComments, setEventComments] = useState([]);
    const [userLevel, setUserLevel] = useState(1);

    useEffect(() => {
        setEventInfo(tempEvent);
        setEventComments(eventComments => [...eventComments, tempComment])
    }, [])

    return (
        <div className="event-info">
            <Nav userLevel={userLevel}/>
            <div className="event-info-container">
                <div className="event-info-left-content">
                    <EventContent eventInfo={eventInfo}/>
                    <Comments eventComments={eventComments}/>
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
                    <hr />
                    <div className="rate-section">
                        <h3>Rate Event</h3>
                        <ul className="stars">
                            <li className="star-item white"><FontAwesomeIcon icon={faStar} size="xl" /></li>
                            <li className="star-item white"><FontAwesomeIcon icon={faStar} size="xl" /></li>
                            <li className="star-item white"><FontAwesomeIcon icon={faStar} size="xl" /></li>
                            <li className="star-item white"><FontAwesomeIcon icon={faStar} size="xl" /></li>
                            <li className="star-item white"><FontAwesomeIcon icon={faStar} size="xl" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventInfo
