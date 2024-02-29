import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import Nav from "../components/Nav"
import EventBox from "../components/EventBox";

// temp date for styling
const date = new Date();

// temp event for styling
const tempEvent = {
    id:'0',
    name: 'UCF Database Project',
    location: 'L3Harris Engineering Center Room 115',
    category: 'Tech',
    time: '3pm',
    date: `${date.toDateString()}`,
    type: 'Public',
    description: `You are asked to implement a web-based application that solves the problems. Any student
    (user) may register with the application to obtain a user ID and a password. There are three
    user levels: super admin who creates a profile for a university (name, location, description,
    number of students, pictures, etc.), admin who owns an RSO and may host events, and student
    who uses the application to look up information about the various events.`
}

const MyEvents = () => {
    const [userLevel, setUserLevel] = useState(2);
    const [myEvents, setMyEvents] = useState([]);
    const [myAcceptedEvents, setMyAcceptedEvents] = useState([]);
    const [myPendingEvents, setMyPendingEvents] = useState([]);
    const [myDeniedEvents, setMyDeniedEvents] = useState([]);

    useEffect(() => {
        setMyAcceptedEvents(myAcceptedEvents => [...myAcceptedEvents, tempEvent])
    }, [])

    return (
        <div>
            <Nav userLevel={userLevel}/>
            <div className="my-events-container">
                <h2 className="main-heading">My Events</h2>

                <div className="accepted-events-container">
                    <h3 className="my-event-heading">Accepted Events</h3>
                    <ul className="list-of-events">
                        {myAcceptedEvents.length === 0 
                        ? <li><p className="no-data">You have no accepted events at the moment.</p></li> 
                        : myAcceptedEvents.map((event, index) => {
                            // format event name to be placed in URL
                            const trimmedName = event.name.trim();
                            const formattedName = trimmedName.replace(/\s+/g, '-');
                            return (
                                <li className="event-item">
                                    <Link to={`/my-events/${event.id}/${formattedName}`}>
                                        <EventBox event={event}/>
                                    </Link>
                                </li>
                            )
                        })
                        }
                    </ul>
                </div>

                <div className="pending-events-container">
                    <h3 className="my-event-heading">Pending Events</h3>
                    <ul className="list-of-events">
                        {myPendingEvents.length === 0 
                            ? <li><p className="no-data">You have no pending events at the moment.</p></li> 
                            : myPendingEvents.map((event, index) => {
                                // format event name to be placed in URL
                                const trimmedName = event.name.trim();
                                const formattedName = trimmedName.replace(/\s+/g, '-');
                                return (
                                    <li className="event-item">
                                        <Link to={`/my-events/${event.id}/${formattedName}`}>
                                            <EventBox event={event}/>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="denied-events-container">
                    <h3 className="my-event-heading">Denied Events</h3>
                    <ul className="list-of-events">
                        {myDeniedEvents.length === 0 
                            ? <li><p className="no-data">You have no denied events at the moment.</p></li> 
                            : myDeniedEvents.map((event, index) => {
                                // format event name to be placed in URL
                                const trimmedName = event.name.trim();
                                const formattedName = trimmedName.replace(/\s+/g, '-');
                                return (
                                    <li className="event-item">
                                        <Link to={`/my-events/${event.id}/${formattedName}`}>
                                            <EventBox event={event}/>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MyEvents
