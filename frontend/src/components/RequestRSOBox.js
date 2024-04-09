import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

import axios from 'axios';

const RequestRSOBox = ({rso, rsoRequests, setRsoRequests}) => {
    const [accept, setAccept] = useState(false);
    const [deny, setDeny] = useState(false);

    const handleAcceptClick = async () => {
        try {
            const baseUrl = `http://localhost:3500/super_admin/api/rso/approve/${rso.rso_id}`;
            const response = axios.patch(baseUrl);

            setAccept(true);

            setTimeout(() => {
                setAccept(false);
                setRsoRequests(rsoRequests.filter(req => req.rso_id !== rso.rso_id))
            }, 2500)
        } catch (error) {
            console.log(error);
        }
    }

    const handleDenyClick = async () => {
        try {
            const baseUrl = `http://localhost:3500/super_admin/api/rso/deny/${rso.rso_id}`;
            const response = axios.patch(baseUrl);

            setDeny(true);

            setTimeout(() => {
                setDeny(false);
                setRsoRequests(rsoRequests.filter(req => req.rso_id !== rso.rso_id))
            }, 2500)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <details className="request-event-box-container">
            <summary>
                <div className="left-content-request-box">
                    <h2 className="event-name">{rso.name}</h2>
                    <i><FontAwesomeIcon icon={faAngleDown} style={{color: "#5064ff",}} /></i>
                </div>

                <div className="right-content-request-box">
                    {!accept && !deny
                    ?    <>
                            <button onClick={handleAcceptClick} className="request-btn accept">Accept</button>
                            <button onClick={handleDenyClick} className="request-btn deny">Deny</button>
                        </>
                    : accept
                        ? <p className='accept-event'>RSO has been accepted!</p>
                        : <p className='deny-event'>RSO has been denied!</p>
                    }
                </div>
            </summary>
            <div className="request-box-info-container">
                <p><span>RSO Email Contact:</span> {rso.email}</p>
                <p><span>RSO Phone Contact:</span> {rso.number}</p>
                <br />
                <p><span>RSO Description:</span> {rso.desc}</p>
            </div>
        </details>
    )
}

export default RequestRSOBox
