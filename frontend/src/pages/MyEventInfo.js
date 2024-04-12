import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import EventContent from "../components/EventContent";
import axios from "axios";

const MyEventInfo = () => {
    const [eventInfo, setEventInfo] = useState({});
    const { event_id: eventId } = useParams();
    const [status, setStatus] = useState('');

    const getApprovalStatus = async () => {
        const baseUrl = `http://localhost:3500/event/api/event-approval-status/${eventId}`
        try {
            const response = await axios.get(baseUrl);
            const approved = response.data.status.approved;

            if (approved === 2) {
                setStatus('Accepted');
            } else if (approved === 1) {
                setStatus('Pending');
            } else {
                setStatus('Denied')
            }
        } catch (error) {
            return null;
        }
    }

    const getEvent = async () => {
        await axios.get(`http://localhost:3500/event/api/events/${parseInt(eventId)}`)
            .then((response) => {
                const event = response.data.event;
                setEventInfo(event);
            }).catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        getEvent();
        getApprovalStatus();
    }, [])

    return (
        <div className="event-info">
            <div className="event-info-container">
                <div className="event-info-left-content">
                    <EventContent eventInfo={eventInfo}/>
                    <div className="event-status-container">
                        <h2 className="my-event-info-heading">Event Approval Status</h2>
                        <p className={`event-status  + ${status === 'Accepted' ? 'accepted' : status === 'Pending' ? 'pending' : 'denied'}`}>{status}</p>
                    </div>
                </div>

                <div className="event-info-right-content">
                    <div className="location-section">
                        <h3>Location</h3>
                        <p>{eventInfo.location_name}</p>
                    </div>
                    <hr />
                    <div className="contact-section">
                        <h3>Contact Info</h3>
                        <p>{eventInfo.host_name}</p>
                        <p>{eventInfo.event_email}</p>
                        <p>{eventInfo.event_phone}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyEventInfo
