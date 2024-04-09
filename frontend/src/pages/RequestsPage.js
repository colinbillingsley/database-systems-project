import { useEffect, useState } from "react"

import RequestEventBox from "../components/RequestEventBox";
import RequestRSOBox from "../components/RequestRSOBox";
import axios from "axios";

const RequestsPage = () => {
    const [eventRequests, setEventRequests] = useState([]);
    const [rsoRequests, setRsoRequests] = useState([]);

    const getEventRequests = async () => {
        const baseUrl = 'http://localhost:3500/event/api/requests';
        try {
            const response = await axios.get(baseUrl);
            const eventRequests = response.data.requests;

            const requestArray = eventRequests.map(request => ({
                event_id: request.event_id,
                    time: request.time?.trim(),
                    desc: request.desc?.trim(),
                    location_name: request.location_name?.trim(),
                    date: request.date ? request.date.trim() : '', // Handle undefined date
                    category: request.category ? request.category.trim() : '', // Handle undefined category
                    event_type: request.event_type ? request.event_type.trim() : '', // Handle undefined category
                    event_host: request.event_host?.trim(),
                    event_phone: request.event_phone?.trim(),
                    event_email: request.event_email?.trim(),
                    event_name: typeof request.event_name === 'string' ? request.event_name.trim() : '',
                    longitude: request.longitude,
                    latitude: request.latitude,
                    }));

            setEventRequests(requestArray);
        } catch (error) {
            console.log(error.response.data.error);
            return null;
        }
    }

    const getRsoRequests = async () => {
        const baseUrl = 'http://localhost:3500/rso/api/requests';
        try {
            const response = await axios.get(baseUrl);
            const rsoRequests = response.data.requests;

            const requestArray = rsoRequests.map(request => ({
                rso_id: request.rso_id,
                name: request.name?.trim(),
                created_by: request.created_by,
                type: request.type?.trim(),
                desc: request.desc?.trim(),
                number: request.number?.trim(),
                email: request.email?.trim(),
                status: request.status?.trim(),
                    }));

            setRsoRequests(requestArray);
        } catch (error) {
            console.log(error.response.data.error);
            return null;
        }
    }

    useEffect(() => {
        getEventRequests();
        getRsoRequests();
    }, [])

    return (
        <div className="requests-page">
            <div className="requests-page-container">
                <div className="event-requests-container">
                    <h2 className="request-heading">Event Requests</h2>
                    <div className="event-request-cards-container">
                        <ul className="list-of-events">
                            {/* check if there's any event requests in database */}
                            {(eventRequests.length === 0) 
                                // if no events found, display message
                                ? 
                                <li><p className="no-data">You currently have no event requests at the moment.</p></li> 
                                // if events found, display all events
                                :
                                eventRequests.map((event, index) => {
                                    return (
                                        <li className="event-item"><RequestEventBox event={event} eventRequests={eventRequests} setEventRequests={setEventRequests}/></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

                <div className="rso-requests-container">
                    <h2 className="request-heading">RSO Requests</h2>
                    <ul className="list-of-events">
                        {/* check if there's any rso requests in database for university*/}
                        {(rsoRequests.length === 0) 
                            // if no rsos found, display message
                            ? 
                            <li><p className="no-data">You currently have no RSO requests at the moment.</p></li> 
                            // if rsos found, display all rsos
                            :
                            rsoRequests.map((rso, index) => {
                                return (
                                    <li className="event-item"><RequestRSOBox rso={rso} rsoRequests={rsoRequests} setRsoRequests={setRsoRequests}/></li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RequestsPage
