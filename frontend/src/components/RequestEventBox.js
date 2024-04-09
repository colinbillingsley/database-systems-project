import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { useState } from 'react';

const RequestEventBox = ({event, eventRequests, setEventRequests}) => {
    const [accept, setAccept] = useState(false);
    const [deny, setDeny] = useState(false);

    const handleAcceptClick = async () => {
        try {
            const baseUrl = `http://localhost:3500/super_admin/api/event/approve/${event.event_id}`;
            const response = axios.patch(baseUrl);

            setAccept(true);

            setTimeout(() => {
                setAccept(false);
                setEventRequests(eventRequests.filter(req => req.event_id !== event.event_id))
            }, 2500)
        } catch (error) {
            console.log(error);
        }
    }

    const handleDenyClick = async () => {
        try {
            const baseUrl = `http://localhost:3500/super_admin/api/event/deny/${event.event_id}`;
            const response = axios.patch(baseUrl);

            setDeny(true);

            setTimeout(() => {
                setDeny(false);
                setEventRequests(eventRequests.filter(req => req.event_id !== event.event_id))
            }, 2500)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <details className="request-event-box-container">
            <summary>
                <div className="left-content-request-box">
                    <h2 className="event-name">{event.event_name}</h2>
                    <i><FontAwesomeIcon icon={faAngleDown} style={{color: "#5064ff",}} /></i>
                </div>

                <div className="right-content-request-box">
                    {!accept && !deny
                    ?   <>
                            <button onClick={handleAcceptClick} className="request-btn accept">Accept</button>
                            <button onClick={handleDenyClick} className="request-btn deny">Deny</button>
                        </>
                    : accept
                        ? <p className='accept-event'>Event has been accepted!</p>
                        : <p className='deny-event'>Event has been denied!</p>
                    }
                </div>
            </summary>
            <div className="request-box-info-container">
                <p><span>Event Host:</span> {event.event_host}</p>
                <p><span>Event Email Contact:</span> {event.event_email}</p>
                <p><span>Event Phone Contact:</span> {event.event_phone}</p>
                <br />
                <p><span>Event Description:</span> {event.desc}</p>
                <br />
                <p><span>Event Location:</span> {event.location_name}</p>
                <p><span>Event Latitude:</span> {event.latitude}</p>
                <p><span>Event Longitude:</span> {event.longitude}</p>
            </div>
        </details>
    )
}

export default RequestEventBox
