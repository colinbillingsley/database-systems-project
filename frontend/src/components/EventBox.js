import { useEffect, useState } from "react";

const EventBox = ({event}) => {
    const [formattedTime, setFormattedTime] = useState('');
    const [formattedDate, setFormattedDate] = useState('');
    
    useEffect(() => {
        const dateString = event.date;
        const timeString = event.time;

        const dateTime = new Date(dateString);
        const time = new Date(`2000-01-01T${timeString}`);

        // Format date
        const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        setFormattedDate(dateTime.toLocaleDateString('en-US', dateOptions));

        // Format time
        const timeOptions = { hour12: true, hour: 'numeric', minute: '2-digit', second: '2-digit' };
        setFormattedTime(time.toLocaleTimeString('en-US', timeOptions));

    }, [event])
    
    return (
        <div className="event-box-container">
            <div className="event-box-heading">
                <h2 className="event-name">{event.event_name}</h2>
                <div className="event-info-type-cat">
                    <p className="event-info-category">{event.category}</p>
                    {/* display type and set specified class depending on type of event (Public, Private, or RSO) */}
                    <span className={`event-type + ${event.event_type === 'Public' ? 'public' : event.event_type === 'RSO' ? 'rso' : event.event_type === 'Private' ? 'private' : ''}`}>{event.event_type}</span>
                </div>
            </div>
            <p className="event-date-time">{formattedDate} @ {formattedTime}</p>
            <p className="event-location"><span>Location</span> {event.location_name}</p>
            <p className="event-description">
                {/* display full description if less than 500 chars, else add elipses after 500 chars */}
                {event.desc && event.desc.length > 500 ? event.desc.substr(0, 500) + '...' : event.desc}
            </p>
        </div>
    )
}

export default EventBox
