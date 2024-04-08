import { useEffect, useState } from "react"

const EventContent = ({eventInfo}) => {
    const [formattedTime, setFormattedTime] = useState('');
    const [formattedDate, setFormattedDate] = useState('');

     // format date and time
    const formatDateTime = () => {
        const dateString = eventInfo.date;
        const timeString = eventInfo.time;

        const dateTime = new Date(dateString);
        const time = new Date(`2000-01-01T${timeString}`);

        // Format date
        const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        setFormattedDate(dateTime.toLocaleDateString('en-US', dateOptions));

        // Format time
        const timeOptions = { hour12: true, hour: 'numeric', minute: '2-digit', second: '2-digit' };
        setFormattedTime(time.toLocaleTimeString('en-US', timeOptions));
    }

    useEffect(() => {
        formatDateTime();
    }, [eventInfo])

    return (
        <div>
            <h2 className="main-heading">{eventInfo.event_name}</h2>
            <p className="event-info-date-time">{`${formattedDate} @ ${formattedTime}`}</p>
            <div className="event-info-type-cat">
                <span className={`event-type + ${eventInfo.event_type === 'Public' ? 'public' : eventInfo.event_type === 'RSO' ? 'rso' : eventInfo.event_type === 'Private' ? 'private' : ''}`}>{eventInfo.event_type}</span>
                <span className={`event-info-category`}>{eventInfo.category}</span>
            </div>
            <p className="event-info-description">{eventInfo.desc}</p>
        </div>
    )
}

export default EventContent
