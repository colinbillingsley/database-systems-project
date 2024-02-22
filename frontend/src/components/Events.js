import { useState } from "react"
import { Link } from "react-router-dom";

import Nav from "./Nav"
import DayFilters from "./DayFilters";
import Filters from "./Filters";
import EventBox from "./EventBox";
import CreateEvent from "./CreateEvent";

const Events = ({userLevel}) => {
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

    const [events, setEvents] = useState([tempEvent, tempEvent, tempEvent]);
    const [uniName, setUniName] = useState("UCF");
    const [dayFilter, setDayFilter] = useState("Day");
    const [dayFilterHeading, setDayFilterHeading] = useState("Today's Events");

    // open create event menu when create events is clicked
    const EventClick = () => {
        const createEvent = document.querySelector('.create-event-wrapper');
        createEvent.classList.remove('hidden');
    }

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
                    <h3 className="day-filter-heading">{dayFilterHeading}</h3>
                    <ul className="list-of-events">
                        {/* check if there's any events in database */}
                        {(events.length === 0) 
                            // if no events found, display message
                            ? 
                            <li>
                                <p className="no-events-found">No events found.</p>
                            </li> 
                            // if events found, display all events
                            :
                            events.map((event, index) => {
                                // format event name to be placed in URL
                                const trimmedName = event.name.trim();
                                const formattedName = trimmedName.replace(/\s+/g, '-');

                                return (
                                    <li className="event-item">
                                        <Link to={`/events/${event.id}/${formattedName}`}>
                                            <EventBox
                                                index={index}
                                                name={event.name} 
                                                location={event.location}
                                                time={event.time}
                                                date={event.date}
                                                type={event.type}
                                                category={event.category}
                                                description={event.description}
                                            />
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="events-side-content">
                    <Filters />
                </div>
            </div>
            <CreateEvent />
        </div>
    )
}

export default Events
