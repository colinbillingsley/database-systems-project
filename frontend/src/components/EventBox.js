const EventBox = ({index, name, time, location, date, type, category, description}) => {
    
    return (
        <div className="event-box-container">
            <div className="event-box-heading">
                <h2 className="event-name">{name}</h2>
                {/* display type and set specified class depending on type of event (Public, Private, or RSO) */}
                <span className={`event-type + ${type === 'Public' ? 'public' : type === 'RSO' ? 'rso' : type === 'Private' ? 'private' : ''}`}>{type}</span>
            </div>
            <p className="event-date-time">{date} @ {time}</p>
            <p className="event-location"><span>Location</span> {location}</p>
            <p className="event-category"><span>Category</span> {category}</p>
            <p className="event-description">
                {/* display full description if less than 500 chars, else add elipses after 500 chars */}
                {description.length > 500 ? description.substr(0,500) + '...' : description}
            </p>
        </div>
    )
}

export default EventBox
