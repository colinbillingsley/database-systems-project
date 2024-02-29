const EventBox = ({event}) => {
    
    return (
        <div className="event-box-container">
            <div className="event-box-heading">
                <h2 className="event-name">{event.name}</h2>
                <div className="event-info-type-cat">
                    <p className="event-info-category">{event.category}</p>
                    {/* display type and set specified class depending on type of event (Public, Private, or RSO) */}
                    <span className={`event-type + ${event.type === 'Public' ? 'public' : event.type === 'RSO' ? 'rso' : event.type === 'Private' ? 'private' : ''}`}>{event.type}</span>
                </div>
            </div>
            <p className="event-date-time">{event.date} @ {event.time}</p>
            <p className="event-location"><span>Location</span> {event.location}</p>
            <p className="event-description">
                {/* display full description if less than 500 chars, else add elipses after 500 chars */}
                {event.description.length > 500 ? event.description.substr(0,500) + '...' : event.description}
            </p>
        </div>
    )
}

export default EventBox
