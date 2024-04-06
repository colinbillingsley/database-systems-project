import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import EventBox from "../components/EventBox";

const MyEvents = () => {
    const [userLevel, setUserLevel] = useState(2);
    const [myEvents, setMyEvents] = useState([]);
    const [myAcceptedEvents, setMyAcceptedEvents] = useState([]);
    const [myPendingEvents, setMyPendingEvents] = useState([]);
    const [myDeniedEvents, setMyDeniedEvents] = useState([]);

    useEffect(() => {
        
    }, [])

    return (
        <div>
            <div className="my-events-container">
                <h2 className="main-heading">My RSO Events</h2>

                <div className="accepted-events-container">
                    <ul className="list-of-events">
                        {myAcceptedEvents.length === 0 
                        ? <li><p className="no-data">You have no RSO events at the moment.</p></li> 
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
            </div>
        </div>
    )
}

export default MyEvents
