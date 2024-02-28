import { useState } from "react";

const EventContent = ({eventInfo}) => {

    return (
        <div>
            <h2 className="main-heading">{eventInfo.name}</h2>
            <p className="event-info-date-time">{`${eventInfo.date} @ ${eventInfo.time}`}</p>
            <div className="event-info-type-cat">
                <span className={`event-type + ${eventInfo.type === 'Public' ? 'public' : eventInfo.type === 'RSO' ? 'rso' : eventInfo.type === 'Private' ? 'private' : ''}`}>Public</span>
                <span className={`event-info-category`}>{eventInfo.category}</span>
            </div>
            <p className="event-info-description">{eventInfo.description}</p>
        </div>
    )
}

export default EventContent
