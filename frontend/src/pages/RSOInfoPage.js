import { useState } from "react"

const tempRSO = {
    id: 0,
    name: 'UCF Soccer',
    type: 'Club',
    numMembers: 4,
    members: ['Colin Billingsley', 'Joshua Easterling', 'Jordan Morillo', 'Guest User'],
    email: 'abc_example@gmail.com',
    phone: '123-456-7890',
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quidem nesciunt eligendi, suscipit vel corrupti unde, inventore placeat possimus quas necessitatibus aperiam. Expedita, perspiciatis? Qui, natus! Eius commodi nemo cum.`
}

const RSOInfoPage = () => {
    const [userLevel, setUserLevel] = useState(2);

    return (
        <div className="rso-info">
            <div className="rso-info-container">
                <div className="rso-info-left-content">
                    <div className="rso-info-heading">
                        <h2 className="rso-info-name">{tempRSO.name}</h2>
                        <p className="rso-info-type">{tempRSO.type}</p>
                    </div>
                    <p className="rso-info-description">{tempRSO.description ? tempRSO.description : <p className="no-data">No description added for RSO.</p>}</p>
                </div>

                <div className="rso-info-right-content">
                    <div className="contact-section">
                        <h3>Contact Info</h3>
                        <p>{tempRSO.email}</p>
                        <p>{tempRSO.phone}</p>
                    </div>
                    <hr />
                    <div className="members-section">
                        <h3>Members</h3>
                        <ul className="members-list">
                            {tempRSO.members.map(member => {
                                return(<li className="member-item">{member}</li>)
                            })
                            }
                        </ul>
                    </div>
                    <hr />
                    <div className="join-section">
                        <h3>Not a part of the RSO?</h3>
                        <button className="join-rso-btn">Request to Join</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RSOInfoPage
