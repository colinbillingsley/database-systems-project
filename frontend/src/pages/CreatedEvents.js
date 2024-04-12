import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

import axios from "axios";
import EventBox from "../components/EventBox";

const CreatedEvents = () => {
    const [myAcceptedEvents, setMyAcceptedEvents] = useState([]);
    const [myPendingEvents, setMyPendingEvents] = useState([]);
    const [myDeniedEvents, setMyDeniedEvents] = useState([]);
    const {user} = useAuthContext();

    // get user created RSO events
    const getUserApprovedCreatedEvents = async () => {
        const baseUrl = `http://localhost:3500/event/api/my-created-events/approved/${user.uid}`;
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
            setMyAcceptedEvents(eventsArray);
        } catch (error) {
            console.log(error);
        }
    }

    // get user created RSO events
    const getUserPendingCreatedEvents = async () => {
        const baseUrl = `http://localhost:3500/event/api/my-created-events/pending/${user.uid}`;
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
            setMyPendingEvents(eventsArray);
        } catch (error) {
            console.log(error);
        }
    }

    // get user created RSO events
    const getUserDeniedCreatedEvents = async () => {
        const baseUrl = `http://localhost:3500/event/api/my-created-events/denied/${user.uid}`;
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
            setMyDeniedEvents(eventsArray);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserApprovedCreatedEvents();
        getUserPendingCreatedEvents();
        getUserDeniedCreatedEvents();
    }, [])

    return (
        <div>
            <div className="my-events-container">
                <h2 className="main-heading">My Created RSO Events</h2>

                <div className="accepted-events-container">
                    <h2 className="event-heading">Accepted Events</h2>
                    <ul className="list-of-events">
                        {myAcceptedEvents.length === 0 
                        ? <li><p className="no-data">You have no RSO events accepted at the moment.</p></li> 
                        : myAcceptedEvents.map((event, index) => {
                            // format event name to be placed in URL
                            const trimmedName = event.event_name.trim();
                            const formattedName = trimmedName.replace(/\s+/g, '-');
                            const status = 'Accepted';

                            return (
                                <li className="event-item">
                                    <Link to={`/my-events/${event.event_id}/${formattedName}`}>
                                        <EventBox event={event} />
                                    </Link>
                                </li>
                            )
                        })
                        }
                    </ul>
                </div>

                <div className="accepted-events-container">
                    <h2 className="event-heading">Pending Events</h2>
                    <ul className="list-of-events">
                        {myPendingEvents.length === 0 
                        ? <li><p className="no-data">You have no RSO events pending at the moment.</p></li> 
                        : myPendingEvents.map((event, index) => {
                            // format event name to be placed in URL
                            const trimmedName = event.event_name.trim();
                            const formattedName = trimmedName.replace(/\s+/g, '-');
                            return (
                                <li className="event-item">
                                    <Link to={`/my-events/${event.event_id}/${formattedName}`}>
                                        <EventBox event={event} />
                                    </Link>
                                </li>
                            )
                        })
                        }
                    </ul>
                </div>

                <div className="accepted-events-container">
                    <h2 className="event-heading">Denied Events</h2>
                    <ul className="list-of-events">
                        {myDeniedEvents.length === 0 
                        ? <li><p className="no-data">You have no RSO events denied at the moment.</p></li> 
                        : myDeniedEvents.map((event, index) => {
                            // format event name to be placed in URL
                            const trimmedName = event.event_name.trim();
                            const formattedName = trimmedName.replace(/\s+/g, '-');
                            return (
                                <li className="event-item">
                                    <Link to={`/my-events/${event.event_id}/${formattedName}`}>
                                        <EventBox event={event} />
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

export default CreatedEvents
