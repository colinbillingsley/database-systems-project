const EventBox = ({name, category, type, description, time, date}) => {
    return (
        <div className="event-box-container">
            <h2 className="event-name">{name}</h2>
            <p className="event-date-time">{date} @ {time}</p>
            <p>Type: {type}</p>
            <p>Category: {category}</p>
            <p className="event-description">{description}</p>
        </div>
    )
}

export default EventBox
