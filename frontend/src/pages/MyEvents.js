import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import EventBox from "../components/EventBox";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";

const MyEvents = () => {
    const [myEvents, setMyEvents] = useState([]);
    const {user} = useAuthContext();

    const getMyEvents = async () => {
        const uid = user.uid;
        const baseUrl = `http://localhost:3500/event/api/myevents/${uid}`;
        try {
            const response = await axios.get(baseUrl);
            const events = response.data.events;
                const eventsArray = events.map(event => ({
                    event_id: event.event_id,
                    uni_id: event.uni_id,
                    time: event.time?.trim(),
                    desc: event.desc?.trim(),
                    location_name: event.location_name?.trim(),
                    date: event.date ? event.date.trim() : '', // Handle undefined date
                    category: event.category ? event.category.trim() : '', // Handle undefined category
                    event_type: event.event_type ? event.event_type.trim() : '', // Handle undefined category
                    event_host: event.event_host?.trim(),
                    event_phone: event.event_phone?.trim(),
                    event_email: event.event_email?.trim(),
                    event_name: typeof event.event_name === 'string' ? event.event_name.trim() : '',
                    longitude: event.longitude,
                    latitude: event.latitude
                        }));
                setMyEvents(eventsArray);
        } catch (error) {
            console.log(error);
            console.log("error getting events");
        }
    }

    useEffect(() => {
        getMyEvents();
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
                            const trimmedName = event.event_name.trim();
                            const formattedName = trimmedName.replace(/\s+/g, '-');
                            return (
                                <li className="event-item">
                                    <Link to={`/events/${event.event_id}/${formattedName}`}>
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
