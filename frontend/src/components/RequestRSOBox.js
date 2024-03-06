import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const RequestRSOBox = ({rso}) => {
    return (
        <details className="request-event-box-container">
            <summary>
                <div className="left-content-request-box">
                    <h2 className="event-name">{rso.name}</h2>
                    <i><FontAwesomeIcon icon={faAngleDown} style={{color: "#5064ff",}} /></i>
                </div>

                <div className="right-content-request-box">
                    <button className="request-btn accept">Accept</button>
                    <button className="request-btn deny">Deny</button>
                </div>
            </summary>
            <div className="request-box-info-container">
                <p><span>RSO Description:</span> {rso.description}</p>
                <p><span>RSO Email Contact:</span> {rso.email}</p>
                <p><span>RSO Phone Contact:</span> {rso.phone}</p>
                <p>
                    <span>RSO Members ({rso.numMembers}):</span>
                    <ul className="members-list">
                        {rso.members.map(member => {
                            return(<li className="member-item">{member}</li>)
                        })
                        }
                    </ul>
                </p>
            </div>
        </details>
    )
}

export default RequestRSOBox
