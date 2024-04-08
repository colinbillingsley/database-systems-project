import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

import DayFilters from "./DayFilters";
import Filters from "./Filters";
import EventBox from "./EventBox";
import CreateEvent from "./CreateEvent";
import axios from "axios";

const Events = ({userLevel}) => {
    const { user } = useAuthContext();
    const [events, setEvents] = useState([]);
    const [uniName, setUniName] = useState("");
    const [dayFilter, setDayFilter] = useState("Day");
    const [dayFilterHeading, setDayFilterHeading] = useState("Today's Events");
    const [filters, setFilters] = useState([]);

    // open create event menu when create events is clicked
    const EventClick = () => {
        const createEvent = document.querySelector('.create-event-wrapper');
        createEvent.classList.remove('hidden');
    }

    const getUserUniversity = async () => {
        const baseUrl = `http://localhost:3500/university/api/university/${user.uni_id}`;
        try {
            const response = await axios.get(`${baseUrl}`);
            setUniName(response.data.uni_name);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    const getEvents = async () => {
        const getAllEventsUrl = 'http://localhost:3500/event/api/events';
        axios.get(getAllEventsUrl)
            .then((response) => {
                const events = response.data.events;
                const eventsArray = events.map(event => ({
                    event_id: event.event_id,
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
                setEvents(eventsArray);
            })
            .catch((error) => {
                console.log("error getting events")
            })
    }

    useEffect(() => {
        getUserUniversity();
        getEvents();
    }, []);

    return (
        <div>
            <div className="events-page-top">
                <h2 className="main-heading">Events at {uniName}</h2>
                <form>
                    <input type="text" name="searchbar" id="searchbar" placeholder="Search..."/>
                </form>
            </div>
            
            <div className="events-container">
                <div className="events-main-content">
                    <div className="day-filter-buttons-container">
                        <DayFilters dayFilter={dayFilter} setDayFilter={setDayFilter} setDayFilterHeading={setDayFilterHeading}/>
                        
                        {/* user is not student, they can create event */}
                        {userLevel !== 0 ? <button className="btn" onClick={EventClick}>Create Event</button> : ''}
                    </div>
                    <h3 className="day-filter-heading">{filters.length === 0 ? "All Events" : "Filtered Events"}</h3>
                    <ul className="list-of-events">
                        {/* check if there's any events in database */}
                        {(events.length === 0) 
                            // if no events found, display message
                            ? 
                            <li>
                                <p className="no-data">No events found.</p>
                            </li> 
                            // if events found, display all events
                            :
                            events.map((event, index) => {
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

                <div className="events-side-content">
                    <Filters filters={filters} setFilters={setFilters}/>
                </div>
            </div>
            <CreateEvent />
        </div>
    )
}

export default Events
