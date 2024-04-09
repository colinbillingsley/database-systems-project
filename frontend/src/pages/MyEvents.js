import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import EventBox from "../components/EventBox";

const MyEvents = () => {
    const [myEvents, setMyEvents] = useState([]);

    useEffect(() => {
        
    }, [])

    return (
        <div>
            <div className="my-events-container">
                <h2 className="main-heading">My RSO Events</h2>

                <div className="accepted-events-container">
                    <ul className="list-of-events">
                        {myEvents.length === 0 
                        ? <li><p className="no-data">You have no RSO events at the moment.</p></li> 
                        : myEvents.map((event, index) => {
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
