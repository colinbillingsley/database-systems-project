import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const RequestEventBox = ({event}) => {
    // format event name to be placed in URL
    const trimmedName = event.name.trim();
    const formattedName = trimmedName.replace(/\s+/g, '-');

    return (
        <details className="request-event-box-container">
            <summary>
                <div className="left-content-request-box">
                    <h2 className="event-name">{event.name}</h2>
                    <i><FontAwesomeIcon icon={faAngleDown} style={{color: "#5064ff",}} /></i>
                </div>

                <div className="right-content-request-box">
                    <button className="request-btn accept">Accept</button>
                    <button className="request-btn deny">Deny</button>
                </div>
            </summary>
            <div className="request-box-info-container">
                <p><span>Event Description:</span> {event.description}</p>
                <p><span>Event Location:</span> {event.location}</p>
                <p><span>Event Host:</span> {event.host}</p>
                <p><span>Event Email Contact:</span> {event.email}</p>
                <p><span>Event Phone Contact:</span> {event.phone}</p>
            </div>
        </details>
    )
}

export default RequestEventBox
